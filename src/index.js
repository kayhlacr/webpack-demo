import _ from "lodash";
import "./style.css";
import Icon from "./icons/mountain.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";
import data from "./sample.json";

function component() {
  const element = document.createElement("div");

  //Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  console.log("json stuff: ", data.glossary.title);

  return element;
}

document.body.appendChild(component());
