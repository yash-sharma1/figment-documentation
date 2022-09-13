# Figment Documentation

This repository contains Figment product documentation for DataHub and related APIs, built with [Docusaurus](https://docusaurus.io).

Click each heading below for a quick overview of what each directory contains:

<details>
  <summary>/docs</summary>

- `api-reference` - Reference documentation generated from schemas
- `indexer-api` - Indexer API Reference
- `rewards-api` - Rewards API Reference
- `node-api` - Node API Reference
- `transaction-search-api` - Transaction Search API Reference
- `guides` - Guides
- `quickstart` - Quick Start articles
- `terms-and-conditions` - Legal Documentation

</details>

<details>
  <summary>/schemas</summary>

- `node-api` - Node schema
- `rewards-api` - Rewards schema
- `indexer-api` - Indexer schema
- `staking-api` - Staking schema
- `tx-search-api` - Transaction Search schema

</details>

<details>
  <summary>/src</summary>

- `components` - MDX components
- `css` - Style Sheets
- `pages` - Standalone pages related to the documentation UX

</details>

<details>
  <summary>/static</summary>

- `img` - Static assets, images

</details>

## Setup Local Development Environment

- Install [`git`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (check with `git --version`)
- Install [Node.js v16+](https://nodejs.org/en/download/) (check with `node -v`)
- Install [yarn](https://classic.yarnpkg.com/en/docs/install) (check with `yarn --version`)

### Clone The Repository

- `git clone git@github.com/figment-networks/figment-documentation.git`
- `cd figment-documentation`

### Install Dependencies with Yarn

- Run `yarn install`

### Running The Development Server

- Run `yarn start` to start the Docusaurus server (on port 3000 by default, specify with `--port XXXX`)

Most changes will be displayed automatically, but in some cases you might need to restart the server. First, shut it down by pressing `CTRL+C` in the terminal where the server is running. You can then restart it by issuing the command `yarn start` again.

## Branches & Making Changes

Please only use the `development` branch to push your changes. The `main` branch requires a reviewed Pull Request to merge changes. Make sure the `main` branch is not ahead of the `development` branch by merging `main` into `development` as necessary.

### Generating Docs From Schemas

The schema files are sync'd automatically from [Postman](https://figmentio.postman.co) Collections and the `generate.js` script transforms them for our needs. Ensure that the contents of `/docs/api-reference` (with the exception of `/docs/api-reference/index.mdx`) remain in the `.gitignore` file.

### Building For Deployment

- Run `yarn build` to output the static site for deployment.
