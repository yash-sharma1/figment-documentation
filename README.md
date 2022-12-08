# Figment Documentation

This repository contains Figment API product documentation, built with [Docusaurus](https://docusaurus.io).

Click each heading below for a quick overview of what each directory contains:

<details>
  <summary>/docs</summary>

- `api-reference` - API Reference documentation generated from schemas.
- `guides` - Helpful guides.
- `quickstart` - Quick Start articles.
- `terms-and-conditions` - Legal Documentation.

</details>

<details>
  <summary>/schemas</summary>

- `node-api` - Node schema.
- `rewards-api` - Rewards schema.
- `rewards-api` - Rewards rates schema.
- `staking-api` - Staking API schema.
- `staking-webhooks-api` - Staking Webhooks API schema.

</details>

<details>
  <summary>/src</summary>

- `components` - MDX Components.
- `css` - Cascading Style Sheets.
- `fonts` - Licensed fonts used when displaying the documentation.
- `pages` - Standalone pages related to the documentation UX.

</details>

<details>
  <summary>/static</summary>

- `img` - Static assets and images.

</details>

## Setup Local Development Environment

- Install [`git`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (check with `git --version`)
- Install [Node.js v16+](https://nodejs.org/en/download/) (check with `node -v`)
- Install [yarn](https://classic.yarnpkg.com/en/docs/install) (check with `yarn --version`)

### Clone the Repository

- `git clone git@github.com/figment-networks/figment-documentation.git`
- `cd figment-documentation`

### Install Dependencies with Yarn

- Run `yarn install`

### Setup .env File

Rename the existing `.env-example` file to `.env`, run:

```bash
cp .env-example .env
```

You should now have a file named `.env` in the project root directory: `/figment-documentation/.env`.

The file must always include the keys `DEVELOPMENT`, `API_KEY` and `PROXY_HOST`.
A proxy is used to prevent the API key from being exposed on the client-side.
Refer to the [Manage & Secure API Keys](http://docs.figment.io/guides/manage-and-secure-api-keys#api-key-best-practices) guide for more information.

```text
DEVELOPMENT=1
API_KEY=<An approved API key>
PROXY_HOST=<API Proxy URL>
```

Contact Figment DevRel for a valid `API_KEY` and `PROXY_HOST` for testing purposes.

### Running the Development Server

- Run `yarn start` to start the Docusaurus server (on port 3000 by default, specify with `--port XXXX`)

Most changes will be displayed automatically, but in some cases you might need to restart the server.
First, shut it down by pressing `CTRL+C` in the terminal where the server is running.
You can then restart it by issuing the command `yarn start`.

The `.env` file must be present before starting the development server if you intend to use or test the API Reference interactivity.
If any changes are made to the `.env` file while the development server is running, restart the development server.

## Branches & Making Changes

Only base feature branches and Pull Requests on the `development` branch.
The `main` branch requires a reviewed Pull Request to merge changes, as this will trigger a deployment to production.
Make sure the `main` branch is not ahead of the `development` branch by merging `main` into `development` as necessary.

### Generating Docs from Schemas

The schema files are synced automatically from [Postman](https://figmentio.postman.co) Collections.
The `generate.js` script transforms them for our needs at build time.
Ensure that the contents of `/docs/api-reference` (with the exception of `/docs/api-reference/index.mdx`) remain in the `.gitignore` file.

### Building for Deployment

- Run `yarn build` to output the static site for deployment. Currently this is handled as part of the GitHub Pages deployment pipeline.
