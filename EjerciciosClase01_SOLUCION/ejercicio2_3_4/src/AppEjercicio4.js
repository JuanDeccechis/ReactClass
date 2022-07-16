import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.comment.author} />
      <div className="Comment-text">
        {props.comment.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.comment.date)}
      </div>
    </div>
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

class App extends Component {
  render() {
    const comment = {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64"
      }
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Comment comment={comment} />
        </div>
      </div>
    );
  }
}

export default App;
