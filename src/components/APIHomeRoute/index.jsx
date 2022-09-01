import { useHistory } from "@docusaurus/router";
import React, { useEffect } from "react";

export default function APIHomeRoute({ service, network }) {
  const history = useHistory();

  useEffect(() => {
    history.push(`${service}/${network}`);
  }, [service, network]);
  return <></>;
}
