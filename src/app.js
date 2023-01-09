import drawTree from "./index.js";

window.addEventListener("load", () => {
  document.querySelector("#phyd3-display").addEventListener("click", () => {
    document
      .querySelector("#phyd3-root")
      .appendChild(drawTree(document.querySelector("#phyd3-input").value));
  });

  document.querySelector("#phyd3-clear").addEventListener("click", () => {
    const root = document.querySelector("#phyd3-root");
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
  });
});
