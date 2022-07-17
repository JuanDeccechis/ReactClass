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
  constructor(props){
    super(props);
    this.state = {
      time : new Date().toLocaleTimeString(),
      interval : setInterval(() => this.tick(), 1000)
    }
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleTimeString() })
  }

  togglePlay = () => {
    const { interval } = this.state;
    if (interval){
      clearInterval(interval);
      this.setState({ interval: null });
    } else {
      this.setState({ interval : setInterval(() => this.tick(), 1000) });
    }
  }
  
  render() {
    const { time, interval } = this.state;

    return (
      <div>
        <h1>Hello, world, I'm the Clock component!</h1>
        <h2>The time is: {time}.</h2>
        <button
          onClick={() => {
            this.togglePlay()
          }}
        >
          {interval != null ? 
          "Pausar"
          :
          "Reanudar"
          }
        </button>
      </div>
    );
  }
}

export default App;
