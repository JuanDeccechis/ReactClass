import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import ListOfCompetitions from "./components/ListOfCompetitions";
import Competition from "./components/Competition";

class App extends Component {
  render() {
    return (
      
      <div className="container">
        <ListOfCompetitions />
      </div>
      
    );
  }
}

export default App;
