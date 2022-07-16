import React, { Component } from "react";
import "./Game.css";

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={this.props.onPress}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null) //[null, null, null, null, null, null, null, null, null]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    var squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    var self = this;
    return (
      <Square
        value={this.state.squares[i]}
        onPress={function() {
          self.handleClick(i);
        }}
      />
    );
  }

  render() {
    var status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;

// ========================================
function calculateWinner(squares) {
  var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (var i = 0; i < lines.length; i++) {
    var [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
