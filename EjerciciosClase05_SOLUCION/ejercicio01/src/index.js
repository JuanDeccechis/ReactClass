import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const comments = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://thecatapi.com/api/images/get"
    }
  },
  {
    date: new Date("2017/08/20"),
    text: "This seems to be fun",
    author: {
      name: "Another Cat",
      avatarUrl: "http://thecatapi.com/api/images/get?format=src"
    }
  },
  {
    date: new Date("2017/07/15"),
    text: "Cats are sweet",
    author: {
      name: "Random Cat",
      avatarUrl: "http://thecatapi.com/api/images/get?format=src&type=png"
    }
  }
];

ReactDOM.render(<App comments={comments} />, document.getElementById("root"));
registerServiceWorker();
