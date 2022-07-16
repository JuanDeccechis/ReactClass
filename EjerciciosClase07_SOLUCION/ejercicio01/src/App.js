import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import GithubProfiles from "./components/GithubProfiles";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Logout from "./components/Logout";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/GithubProfiles" component={GithubProfiles} />
          <Route path="/Logout" component={Logout} />
        </div>
      </Router>
    );
  }
}

export default App;
