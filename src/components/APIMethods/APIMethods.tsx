import React from "react";
import BackToTopButton from "@theme/BackToTopButton";

import { RequestObject, ResponseObject } from "@site/types/src";
import { Description, CodeExample } from "./components";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

interface Props {
  name: string;
  content: string;
  interactive: boolean;
  request: RequestObject;
  response: ResponseObject;
}

function APIMethod({
  name,
  content = "",
  interactive,
  request,
  response,
}: Props) {
  if (["Rewards (by epoch)", "Rewards (daily)"].includes(name)) {
    request.body = {
      ...request.body,
      start_time: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      end_time: new Date().toISOString().split("T")[0],
    };
  }
  return (
    <>
      <h2
        id={name.toLowerCase()}
        className={styles.heading}
        data-method={request.method}
      >
        <Link to={`#${name.toLowerCase()}`}>{name}</Link>
      </h2>

      <Description content={content} />

      <CodeExample req={request} res={response} interactive={interactive} />

      <hr />
    </>
  );
}

export default function APIMethods({ network, methods }) {
  return (
    <>
      <h3>Available Methods</h3>
      {methods.map((method, index) => (
        <APIMethod key={network + index} {...method} />
      ))}
      <BackToTopButton />
    </>
  );
}
