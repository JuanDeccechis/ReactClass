import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter initialValue={100} />
      </div>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialValue ? props.initialValue : 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(function(prevState, props) {
      return {
        counter: prevState.counter + 1
      };
    });
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.counter}</button>;
  }
}

export default App;
