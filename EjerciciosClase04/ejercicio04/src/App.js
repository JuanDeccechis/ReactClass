import React, { Component } from "react";
import "./App.css";

class Board extends Component {
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.value}
      </div>
    );
  }
}

class BoardSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  onToggleClick() {}
  render() {
    return (
      <div>
        <div className="boards">
          <Board value={"Ejemplo"} selected={true} />
        </div>
        <button className="button">Toggle</button>
      </div>
    );
  }
}

class ShowHideBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBoard: true
    };
  }
  onShowHide() {}
  render() {
    return (
      <div>
        <div>
          <button className="button">
            {" "}Show/Hide{" "}
          </button>
        </div>
        {this.state.showBoard &&
          <div>
            {this.props.children}
          </div>}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <ShowHideBoard>
          <BoardSwitcher boards={[1, 2, 3, 4]} />
        </ShowHideBoard>
      </div>
    );
  }
}

export default App;
