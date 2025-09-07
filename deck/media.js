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

export const backgrounds = {
  seattle:
    "https://images.unsplash.com/photo-1589481169991-40ee02888551?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  vintageComputer:
    "https://images.unsplash.com/photo-1711346105258-bbb9136592d7?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  hi: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
};
