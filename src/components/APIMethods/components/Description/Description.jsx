import React from "react";
import ReactMarkdown from "react-markdown";

import MDDetails from "./MDDetails.mdx";

export default function Description({ content = "" }) {
  const [description, ...rest] = content.trim().split(/\n+/);
  const specs = rest.join("\n");

  return (
    <div>
      <ReactMarkdown>{description}</ReactMarkdown>

      <MDDetails title="View specification" details={specs} />
    </div>
  );
}
