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

  onToggleClick = () => {
    this.setState(function(PrevState) {
      return { selectedIndex : (PrevState.selectedIndex + 1) % 4 }
    })
  }

  render() {
    const { boards } = this.props;
    const { selectedIndex } = this.state;
    return (
      <div>
        <div className="boards">
          {boards.map((board, index) => {
            return (
              <Board key={index} value={board} selected={index === selectedIndex} />

            )
          })}
        </div>
        <button className="button" onClick={this.onToggleClick}>Toggle</button>
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
  
  onShowHide = () => {
    this.setState(function(PrevState) {
      return { showBoard: !PrevState.showBoard }
    });
  }

  render() {
    const { showBoard } = this.state;
    return (
      <div>
        <div>
          <button className="button" onClick={this.onShowHide}>
            {`${showBoard ? 'Hide' : 'Show'}`}
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
