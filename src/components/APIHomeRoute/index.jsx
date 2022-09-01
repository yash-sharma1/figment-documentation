import { useHistory, useLocation } from "@docusaurus/router";
import React, { useEffect } from "react";

export default function APIHomeRoute({ service, network }) {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    history.push(`${location.pathname}/${network}`.replace("//", "/"));
  }, [service, network]);
  return <></>;
}
