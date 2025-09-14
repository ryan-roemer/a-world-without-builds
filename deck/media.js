import { renderToString } from "react-dom/server";
import { createElement } from "react";
import htm from "htm";

const html = htm.bind(createElement);

// Single source of truth for logos using htm
export const logosHtm = {
  nearform: html`<img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODiKxPSWQzaep57CVW9j3x3n4iIlZkZLOZA&s"
    style=${{ width: "0.9em", height: "0.9em", marginBottom: "-0.05em" }}
  />`,
};

// Convert htm components to raw HTML strings using React's renderToString
export const logos = Object.fromEntries(
  Object.entries(logosHtm).map(([key, component]) => [
    key,
    renderToString(component).replace(/\n/g, ""),
  ]),
);

const UNSPLASH_QUERY =
  "q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const backgrounds = {
  seattle: `https://images.unsplash.com/photo-1589481169991-40ee02888551?${UNSPLASH_QUERY}`,
  vintageComputer: `https://images.unsplash.com/photo-1711346105258-bbb9136592d7?${UNSPLASH_QUERY}`,
  hi: `https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?${UNSPLASH_QUERY}`,
  spectacle: `https://nearform.com/open-source/spectacle/assets/images/background-banner-88f6cfec65b38cc314fc2aaf1ad84484.png`,
  history: `https://images.unsplash.com/photo-1501139083538-0139583c060f?${UNSPLASH_QUERY}`,
};
