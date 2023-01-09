import { makeCompatTable, phyloxml } from "@vibbioinfocore/phyd3-parser-compat";
import { build } from "@vibbioinfocore/phyd3";

const drawTree = (serialised) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(serialised, "text/xml");
  const svg = build(makeCompatTable(phyloxml.parse(doc)));

  document.querySelector("#phyd3-root").appendChild(svg.node());
};

window.addEventListener("load", () => {
  document.querySelector("#phyd3-display").addEventListener("click", () => {
    drawTree(document.querySelector("#phyd3-input").value);
  });

  document.querySelector("#phyd3-clear").addEventListener("click", () => {
    const root = document.querySelector("#phyd3-root");
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
  });
});
