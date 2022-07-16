import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.updateTime = this.updateTime.bind(this);
  }
  updateTime() {
    this.setState({
      time: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world, I'm the Clock component!</h1>
        <h2>The time is: {this.state.time.toLocaleTimeString()}.</h2>
        <button onClick={this.updateTime}>
          Actualizar hora
        </button>
      </div>
    );
  }
}

export default App;
