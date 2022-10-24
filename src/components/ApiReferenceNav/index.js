import React from "react";
import { useLocation, useHistory } from "@docusaurus/router";

function toTitleCase(str) {
  return str
    .toLowerCase()
    .replace(/(?:^|[\s-/])\w/g, function (match) {
      return match.toUpperCase();
    })
    .replace(/\-/g, " ")
    .replace("Api", "API");
}

export default function ChangeNetwork({ network, networks, methods, service }) {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="shadow--tl apiRefNav">
      <p className="refNavHeader">
        You are currently viewing the {toTitleCase(service)} Reference for{" "}
        {toTitleCase(network)}. <br /> Use the select boxes below to change
        networks and jump to available methods or endpoints.
      </p>
      <label>Change Network:</label>
      <select
        className="custom-select"
        defaultValue={network}
        onChange={(e) => {
          history.push(
            location.pathname.replace(/\/[^\/]+$/, `/${e.target.value}`)
          );
        }}
      >
        {networks.map((n) => (
          <option key={`${n.value}--n-option`} value={n.value}>
            {n.label}
          </option>
        ))}
      </select>

      <label>Jump to:</label>
      <select
        className="custom-select"
        defaultValue={location.hash.replace("#", "") || ""}
        onChange={(e) => {
          history.push(`#${e.target.value}`);
        }}
      >
        {methods.map((m) => (
          <option key={`${m.name}--m-hash`} value={m.name.toLowerCase()}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
}
