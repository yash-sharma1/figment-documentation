import React from "react";
import ReactMarkdown from "react-markdown";
import BackToTopButton from "@theme/BackToTopButton";

import { RequestObject, ResponseObject } from "@site/types/src";
import { CodeExample } from "./components";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import MDDetails from "./MDDetails.mdx";

interface Props {
  name: string;
  content: string;
  accordionOpen: boolean;
  interactive: boolean;
  request: RequestObject;
  response: ResponseObject;
  endpoint: string;
}

function APIMethod({
  name,
  content = "",
  interactive,
  request,
  accordionOpen = false,
  response,
  endpoint,
}: Props) {
  if (["Rewards (by epoch)", "Rewards (daily)"].includes(name)) {
    request.body = {
      ...(request.body as object),
      start_time: new Date(
        Date.now() - (name === "Rewards (by epoch)" ? 172800000 : 86400000)
      )
        .toISOString()
        .split("T")[0],
      end_time: new Date().toISOString().split("T")[0],
    };
  }

  const [description, ...rest] = content.trim().split(/\n+/);
  const specs = rest.join("\n");

  return (
    <>
      <h2
        id={name.toLowerCase()}
        className={styles.heading}
        data-method={request.method}
      >
        <Link to={`#${name.toLowerCase()}`}>{name}</Link>
      </h2>

      <ReactMarkdown>{description}</ReactMarkdown>

      <CodeExample
        req={request}
        res={response}
        interactive={interactive}
        endpoint={endpoint}
      />

      <MDDetails details={specs} accordionOpen={accordionOpen} />

      <hr />
    </>
  );
}

export default function APIMethods({ network, methods, service, proxy }) {
  return (
    <>
      <h3>Available Methods</h3>
      {methods.map((method, index) => (
        <APIMethod
          key={network + index}
          {...method}
          endpoint={`${proxy}/${service}/${network}`}
          accordionOpen={service !== "node-api"}
        />
      ))}
      <BackToTopButton />
    </>
  );
}
