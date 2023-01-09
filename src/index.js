import { makeCompatTable, phyloxml } from "@vibbioinfocore/phyd3-parser-compat";
import { build } from "@vibbioinfocore/phyd3";

export const drawTree = (serialised) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(serialised, "text/xml");
  const svg = build(makeCompatTable(phyloxml.parse(doc)));

  return svg.node();
};
