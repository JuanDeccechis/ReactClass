import React, { Component } from "react";
import "./App.css";
import GithubProfiles from "./components/GithubProfiles";

class App extends Component {
  render() {
    return (
      <div className="container">
        <GithubProfiles />
      </div>
    );
  }
}

export default App;
