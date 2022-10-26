import React, { useEffect } from "react";

export default function FixBreadCrumbs({ network, service }) {
  useEffect(() => {
    const activeCrumb = document.querySelector(
      ".breadcrumbs__item.breadcrumbs__item--active"
    );
    if (!activeCrumb) return;
    activeCrumb.querySelector("span.breadcrumbs__link").innerHTML = network;
    let templateCrumb = activeCrumb.previousElementSibling;
    templateCrumb = templateCrumb.cloneNode(true);
    templateCrumb.querySelector(".breadcrumbs__link span").innerHTML =
      service.label;
    templateCrumb.querySelector(".breadcrumbs__link").href = service.link;
    activeCrumb.insertAdjacentElement("beforebegin", templateCrumb);
  }, [network]);
  return <></>;
}
