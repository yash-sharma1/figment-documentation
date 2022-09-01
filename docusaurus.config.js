// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const githubConfig =
  process.env.NODE_ENV === "development"
    ? {
        baseUrl: "/test/",
      }
    : {
        baseUrl: "/figment-documentation/",
        organizationName: "figment-networks", // Usually your GitHub org/user name.
        projectName: "figment-documentation", // Usually your repo name.
        deploymentBranch: "gh-pages",
      };

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Welcome to the Figment Docs",
  tagline:
    "Here you'll find everything you need to start building with Figment.",
  url: "https://github.com",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",

  ...githubConfig,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args).map(
              (link) => {
                if (link.label !== "API Reference") return link;
                return {
                  ...link,
                  collapsed: false,
                  items: link.items.map((service) => {
                    return {
                      ...service,
                      collapsed: false,
                      collapsible: false,
                      link: service.items[0],
                      items: service.items.map((network) => ({
                        ...network,
                        className: "hide-network-link",
                      })),
                    };
                  }),
                };
              }
            );

            const guidesIndex = sidebarItems.findIndex(
              (item) => item.label === "Guides"
            );
            sidebarItems.splice(guidesIndex + 1, 0, {
              type: "link",
              label: "Tutorials",
              href: "https://learn.figment.io/",
            });
            return sidebarItems;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
      navbar: {
        title: "Figment Documentation",
        style: "primary",
        logo: {
          alt: "Figment Logo",
          src: "img/logo.svg",
        },
        hideOnScroll: true,
        items: [
          {
            type: "html",
            position: "right",
            value:
              '<a class="feedback_button_link" href="https://forms.gle/MFCkACcSwvSTtZSL9" target="_blank"><button class="button button--secondary">Share your feedback</button></a>',
          },
          {
            href: "https://github.com/figment-networks/figment-documentation",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quick Start",
                to: "/quickstart",
              },
              {
                label: "Node API",
                to: "/api-reference/node-api",
              },
              {
                label: "Staking API",
                to: "/api-reference/staking-api",
              },
              {
                label: "Rewards API",
                to: "/api-reference/rewards-api",
              },
              {
                label: "Transaction Search API",
                to: "/api-reference/transaction-search-api",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://figment.io/devchat/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Figment_io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Figment",
                to: "https://figment.io/",
              },
              {
                label: "Support",
                to: "https://bit.ly/datahub-support-ticket",
              },
              {
                label: "Blog",
                to: "https://figment.io/blog",
              },
              {
                label: "Protocol Governance",
                to: "https://figment.io/solutions/governance",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Figment, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby"],
      },
    }),
};

module.exports = config;
