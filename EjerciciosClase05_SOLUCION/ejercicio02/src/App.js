import React, { Component } from "react";
import "./App.css";
import InputForm from "./components/InputForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <InputForm label={"Name"} placeholder="Enter your complete name" />
      </div>
    );
  }
}

export default App;
