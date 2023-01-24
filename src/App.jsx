import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const animalList = [
  {
    animal: "Cat",
    color: "Orange",
    name: "Kyo",
  },
  {
    animal: "Rat",
    color: "Grey",
    name: "Yuki",
  },
  {
    animal: "Pig",
    color: "brown",
    name: "Kagura",
  },
  {
    animal: "Dog",
    color: "black",
    name: "Shigure",
  }
];

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {animalList.map((animal, idx) => <Pet key={idx} animal={animal.animal} color={animal.color} name={animal.name} />)}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
