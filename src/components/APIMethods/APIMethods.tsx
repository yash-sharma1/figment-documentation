import React from "react";
import BackToTopButton from "@theme/BackToTopButton";

import { RequestObject, ResponseObject } from "@site/types/src";
import { Description, CodeExample } from "./components";
import styles from "./styles.module.css";

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
  return (
    <>
      <h2
        id={name.toLowerCase()}
        className={styles.heading}
        data-method={request.method}
      >
        <code>{name}</code>
        <a className={styles.anchor} href={`#${name.toLowerCase()}`}>
          #
        </a>
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
