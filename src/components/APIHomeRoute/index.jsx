import React, { useEffect } from "react";
import { Redirect } from "@docusaurus/router";

export default function APIHomeRoute({ service, network }) {
  return (
    <Redirect to={`/api-reference/${service}/${network}`.replace("//", "/")} />
  );
}
