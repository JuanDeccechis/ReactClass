import React, { Component } from "react";
import "./App.css";
import GithubProfiles from "./components/GithubProfiles";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import HighLightComponent from './components/HighLightComponent';


class App extends Component {
  render() {
    const HomeEnhanced = HighLightComponent(Home);
    const { name, age } = this.props;
    console.log("App");
    console.log(name);
    console.log(age);
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <hr />
          <Routes>
            <Route path="/" exact={"true"} element={<HomeEnhanced />} />
            <Route path="/githubProfiles" element={<GithubProfiles />} />
            <Route path="/Logout" element={<Logout name={name} age={age} onHandleClick={this.props.handleLogout} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
            
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
