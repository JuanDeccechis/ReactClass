import React, { Component } from "react";
import "./App.css";

class Users extends Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {/* Crear un <li> para cada nombre el la lista que SI sea tu amigo */}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {/* Crear un <li> para cada nombre el la lista que NO sea tu amigo */}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Users
          list={[
            { name: "Juan", friend: true },
            { name: "Pedro", friend: false },
            { name: "Maria", friend: false },
            { name: "Lucia", friend: false },
            { name: "Raul", friend: true },
            { name: "Monica", friend: true }
          ]}
        />
      </div>
    );
  }
}

export default App;
