import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { red, blue, makeColorStyle } from "./button-styles";

const button = makeButton("A button");
document.body.appendChild(button);

console.log(nav(), top, bottom, makeColorStyle("cyan"));
