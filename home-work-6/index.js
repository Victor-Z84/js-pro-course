import { TreeMenu } from "./TreeMenu.js";

document.getElementById("menu")
    .addEventListener("select", e => console.log(e));
    

customElements.define("tree-menu", TreeMenu);