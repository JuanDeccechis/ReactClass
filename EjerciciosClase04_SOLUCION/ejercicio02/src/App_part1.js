import React, { Component } from "react";
import "./App.css";

class Users extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map((user, index) => {
            return <h3 key={index+""}> {`El nombre es: ${user}`} </h3>
          })
        }
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Users list={["Juan", "Pedro", "Maria", "Lucia", "Raul"]} />
      </div>
    );
  }
}

export default App;
