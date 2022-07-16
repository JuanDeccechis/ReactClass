import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return(
    <img
          className="Avatar"
          src={props.image}
          alt={props.name}
        />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar image={props.author.avatarUrl} name={props.author.name}/>
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.comment.author}/>
      <div className="Comment-text">
        {props.comment.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.comment.date)}
      </div>
    </div>
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
