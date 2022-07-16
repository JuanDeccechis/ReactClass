import React, { Component } from "react";
import propTypes from 'prop-types';
import Comment from "./components/Comment.js";
import logo from "./logo.svg";
import "./App.css";

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

App.propTypes = {comments: propTypes.array.isRequired}
export default App;
