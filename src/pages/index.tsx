import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { useHistory } from "@docusaurus/router";

function HomepageHeader() {
  // hack need to fix this proper later
  const history = useHistory();

  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome to the Figment Documentation</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.quickLinks}>
            <div
              className={styles.quickLink}
              onClick={() => history.push("quickstart")}
            >
              <h3>🚀 Quick Start</h3>
              <p>Go from 0 to 1 with our bite-sized quickstarts</p>
              <p>Get started &gt;</p>
            </div>
            <div
              className={styles.quickLink}
              onClick={() => history.push("api-reference")}
            >
              <h3>📚 API Reference</h3>
              <p>
                Explore Figment's powerful APIs for interacting with 20+
                networks
              </p>
              <p>View reference &gt;</p>
            </div>
            <div
              className={styles.quickLink}
              onClick={() => history.push("guides")}
            >
              <h3>📝 Guides</h3>
              <p>Learn important concepts with our easy to leverage guides</p>
              <p>Get building &gt;</p>
            </div>
          </div>
          <hr className={styles.hr} />
          <h2 className={styles.h2}>Explore Products</h2>
          <div className={styles.products}>
            <div
              className={styles.product}
              onClick={() => history.push("api-reference/node-api/arbitrum")}
            >
              <h3>Nodes</h3>
              {/* we should add an image here -- keeping up with our Plaid-theme */}
              <p>
                Interact with on-chain data and submit transactions across 20+
                protocols.
              </p>
            </div>
            <div
              className={styles.product}
              onClick={() =>
                history.push("api-reference/staking-api/avalanche")
              }
            >
              <h3>Staking</h3>
              {/* we should add an image here -- keeping up with our Plaid-theme */}
              <p>
                Build staking transactions programmatically with an universal
                API that feels the same for all protocols.
              </p>
            </div>
            <div
              className={styles.product}
              onClick={() => history.push("api-reference/rewards-api/ethereum")}
            >
              <h3>Rewards</h3>
              {/* we should add an image here -- keeping up with our Plaid-theme */}
              <p>
                Retrieve historical rewards data to integrate directly into your
                user dashboards and rewards distribution.
              </p>
            </div>
            <div
              className={styles.product}
              onClick={() =>
                history.push("api-reference/transaction-search-api/avalanche")
              }
            >
              <h3>Transaction</h3>
              {/* we should add an image here -- keeping up with our Plaid-theme */}
              <p>
                Retrieve historical transactions without having to query the
                blockchain directly.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Start building with Figment">
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
