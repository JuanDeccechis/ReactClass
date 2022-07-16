import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";

import Comment from "./components/Comment";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {this.props.comments.map((comment, index) =>
            <Comment key={index} comment={comment} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired
};
