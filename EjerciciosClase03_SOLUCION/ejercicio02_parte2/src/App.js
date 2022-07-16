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
    this.tick = this.tick.bind(this);
    this.onPress = this.onPress.bind(this);

    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  onPress() {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, world, I'm the Clock component!</h1>
        <h2>The time is: {this.state.time.toLocaleTimeString()}.</h2>
        <button onClick={this.onPress}>
          Pausar/Reanudar
        </button>
      </div>
    );
  }
}

export default App;
