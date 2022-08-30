import React from "react";

import styles from "./styles.module.css";

interface Props {
  title: string;
  content: string;
}

export default function ErrorBanner({ title, content }: Props) {
  return (
    <div className={styles.Banner}>
      <h4 className={styles.Title}>{title}</h4>
      {content}
    </div>
  );
}
