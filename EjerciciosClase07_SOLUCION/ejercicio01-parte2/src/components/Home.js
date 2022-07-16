import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1> Checkout our GithubProfiles Page </h1>
        <Link className="button" to="/GithubProfiles">
          Go to GithubProfiles
        </Link>
      </div>
    );
  }
}

export default Home;
