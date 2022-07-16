import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock time={new Date().toLocaleTimeString()} />
      </div>
    );
  }
}

function Clock(props) {
  return (
    <div>
      <h1>Hello, world, I'm the Clock component!</h1>
      <h2>The time is: {props.time}.</h2>
      <button
        onClick={() => {
          alert("click en actualizar hora");
        }}
      >
        Actualizar hora
      </button>
    </div>
  );
}

export default App;
