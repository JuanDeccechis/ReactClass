import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter value={10} />
      </div>
    );
  }
}

function Counter(props) {
  return <button>{props.value}</button>;
}

export default App;
