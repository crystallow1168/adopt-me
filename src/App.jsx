import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.color),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Cat",
      color: "Orange",
      name: "Kyo",
    }),
    React.createElement(Pet, {
      animal: "Rat",
      color: "Grey",
      name: "Yuki",
    }),
    React.createElement(Pet, {
      animal: "Pig",
      color: "brown",
      name: "Kagura",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      color: "black",
      name: "Shigure",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
