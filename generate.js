require("dotenv").config();
const fs = require("fs-extra");
const SCHEMAS_DIR = "schemas";
const API_KEY = process.env.API_KEY;

function toDashCase(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .replace(/(?:^|[\s-/])\w/g, function (match) {
      return match.toUpperCase();
    })
    .replace(/\-/g, " ")
    .replace("Api", "API");
}

function loadSchemas() {
  return fs
    .readdirSync(SCHEMAS_DIR)
    .map((filename) => {
      if (!filename.endsWith(".json")) return null;
      const filePath = `${SCHEMAS_DIR}/${filename}`;
      const contents = fs.readFileSync(filePath);
      return JSON.parse(contents);
    })
    .filter((schema) => schema !== null);
}

function processJSON(raw = "") {
  try {
    return JSON.parse(raw);
  } catch (e) {
    return "";
  }
}

function processMethod(method, vars) {
  if (method === undefined) return;

  let {
    request: { description, ...request },
    response: { originalRequest: exampleRequest, ...response },
    name,
  } = method;

  response = response[0] || {};
  request = exampleRequest || request;

  let url = request.url.raw !== undefined ? request.url.raw : request.url;
  url = url.replace("{{API_KEY}}", API_KEY);

  let query;
  if (request.method === "GET") {
    query = url.split(API_KEY)[1];
    url = url.split(API_KEY)[0] + API_KEY + "/";
  }

  const match = url.match(/\{\{(.+)\}\}/);
  if (match && !!vars[match[1]]) {
    url = url.replace(match[0], vars[match[1]]);
  }

  return {
    name: name,
    content: description,
    request: {
      ...request,
      body: request.body
        ? request.body.mode === "graphql"
          ? request.body.graphql.query
          : processJSON(request.body.raw)
        : undefined,
      query,
      url,
    },
    interactive: Boolean(vars.INTERACTIVE != "false"),
    response: {
      name: response.name,
      status: response.status,
      code: response.code,
      body: processJSON(response.body),
    },
  };
}

function processServices(services, variables) {
  return services.map((service) => {
    const vars = variables[service.info.name] || {};
    return {
      service: service.info.name,
      networks: service.item.map((network) => {
        return {
          network: network.name,
          parameters: network.description,
          service: service.info.name,
          methods: Array.isArray(network.item)
            ? network.item.map((n) => processMethod(n, vars))
            : !!network.item
            ? [processMethod(network.item, vars)]
            : [],
        };
      }),
    };
  });
}

function frontMatterTemplate({
  title = "",
  pos = 0,
  prev = "null",
  next = "null",
  body = "",
  flat = false,
}) {
  return `---
title: ${title}
sidebar_position: ${pos}
pagination_prev: ${prev}
pagination_next: ${next}
${
  flat
    ? `collapsed: false
collapsible: false`
    : ""
}
---

${body}`;
}

function sidebarIndexForService(service) {
  switch (service) {
    case "node-api":
      return 1;
    case "transaction-search-api":
      return 2;
    case "staking-api":
      return 3;
    case "staking-api-webhooks":
      return 4;
    case "rewards-api":
      return 5;
    default:
      return 0;
  }
}

function createMarkdown(services) {
  const indexBackup = fs.readFileSync("docs/api-reference/index.mdx", "utf-8");
  if (!indexBackup) throw new Error("failed to backup api-reference index");
  fs.emptyDirSync("docs/api-reference/");
  fs.writeFileSync("docs/api-reference/index.mdx", indexBackup, "utf-8");
  fs.emptyDirSync(`partials/transaction-search-parameters`);

  services.forEach(({ service, networks }) => {
    fs.ensureDirSync(`docs/api-reference/${toDashCase(service)}`);
    if (!fs.existsSync(`docs/api-reference/${toDashCase(service)}/index.mdx`)) {
      fs.writeFileSync(
        `docs/api-reference/${toDashCase(service)}/index.mdx`,
        frontMatterTemplate({
          title: toTitleCase(service),
          pos: sidebarIndexForService(service),
          body: `import APIHomeRoute from '@site/src/components/APIHomeRoute'\n\n<APIHomeRoute service='${toDashCase(
            service
          )}' network='${toDashCase(networks[0].network)}' />`,
        }),
        "utf-8"
      );
    }

    const networksList = networks.map((n) => ({
      label: n.network,
      value: toDashCase(n.network),
    }));

    networks.forEach(({ network, methods, parameters }) => {
      fs.writeFileSync(
        `docs/api-reference/${toDashCase(service)}/${toDashCase(network)}.mdx`,
        frontMatterTemplate({
          title: network,
          body:
            `import {APIMethods} from '@site/src/components'\n` +
            `import ApiReferenceNav from '@site/src/components/ApiReferenceNav'\n` +
            `import MakingCalls from '@site/partials/api-reference/making-calls.mdx'\n\n` +
            `# ${toTitleCase(service)} - ${network}\n\n` +
            `<ApiReferenceNav service="${toDashCase(
              service
            )}" methods={${JSON.stringify(
              methods.map((m) => ({ name: m.name }))
            )}} networks={${JSON.stringify(
              networksList
            )}} network="${toDashCase(network)}" />\n\n` +
            `<MakingCalls url="${methods[0].request.url}" />\n\n` +
            `<APIMethods methods={${JSON.stringify(
              methods
            )}} service="${toDashCase(service)}" networks={${JSON.stringify(
              networksList
            )}} network="${toDashCase(network)}" />`,
        }),
        "utf-8"
      );
    });
  });
}

function getEnvironmentVariables(schemas) {
  const vars = {};
  for (let schema of schemas) {
    if (schema.variable) {
      vars[schema.info.name] = schema.variable.reduce((obj, curr) => {
        return {
          ...obj,
          [curr.key]: curr.value,
        };
      }, {});
    }
  }
  return vars;
}

(function process() {
  const schemas = loadSchemas();
  const variables = getEnvironmentVariables(schemas);
  const services = processServices(schemas, variables);
  createMarkdown(services);
  process.exit?.();
})();
