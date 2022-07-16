import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GithubProfiles from "./components/GithubProfiles";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import HighLightComponent from "./components/HighLightComponent";

class App extends Component {
  render() {
    const HomeEnhanced = HighLightComponent(Home);

    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact component={HomeEnhanced} />
            <Route path="/GithubProfiles" component={GithubProfiles} />
            <Route
              path="/Logout"
              render={() => <Logout onHandleClick={this.props.onLogout} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
