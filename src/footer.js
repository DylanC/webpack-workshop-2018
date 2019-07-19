import { red, blue } from "./button-styles";

const top = document.createElement("div");
top.innerText = "Top of footer";
const bottom = document.createElement("div");
bottom.innerText = "Bottom of footer";

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
