import React, { Component } from "react";
import "./App.css";

class Users extends Component {
  render() {
    return (
      <ul>
        {/* Crear un <li> para cada nombre el la lista */}
        {this.props.list.map((item, index) => {
          return(<li key={index}>El nombre es: {item}</li>)
        })}
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
