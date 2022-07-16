import React, { Component } from "react";
import "./App.css";

class Users extends Component {
  render() {
    return (
      <ul>
        {/* Crear un <li> para cada nombre el la lista */}
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
