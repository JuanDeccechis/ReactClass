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

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  handleClick = () => {
    this.setState(function(prevState) {
      return {
        value: prevState.value + 1
      }
    }
    )
  }

  render(){
    const { value } = this.state;
    return <button onClick={this.handleClick}>{value}</button>;
  }
}

export default App;
