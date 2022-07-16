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
    this.onToggleClick = this.onToggleClick.bind(this);
  }
  onToggleClick() {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.boards.length
    });
  }
  render() {
    return (
      <div>
        <div className="boards">
          {this.props.boards.map((board, index) => {
            const isSelected = index === this.state.selectedIndex;
            return <Board value={board} selected={isSelected} key={index} />;
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
    this.onShowHide = this.onShowHide.bind(this);
  }
  onShowHide() {
    this.setState({
      showBoard: !this.state.showBoard
    });
  }
  render() {
    const { showBoard } = this.state;
    return (
      <div>
        <div>
          <button className="button" onClick={this.onShowHide}>
            {showBoard ? 'Hide' : 'Show'}
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
