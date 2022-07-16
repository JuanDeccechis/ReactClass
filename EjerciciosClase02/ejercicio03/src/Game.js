import React, { Component } from "react";
import "./Game.css";

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  handleClick = () => {
    const { number, value, player, setValue, changeTurn } = this.props;
    if (!value){
      setValue();
      changeTurn();
    }
  }

  render() {
    const { number, value } = this.props;
    return (
      <button className="square" onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerTurn: 'X',
      squares: [null, null, null, null, null, null, null, null, null],
    }
    this.renderSquare = this.renderSquare.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  changeTurn = () => {
    this.setState(function(prevState) {
      if (prevState.playerTurn === 'X'){
        return {playerTurn: 'O'}
      } else {
        return {playerTurn: 'X'}
      }
    })
  }

  setValue(square) {
    this.setState(function(prevState) {
      let newSquares = prevState.squares.slice();
      let turn = prevState.playerTurn;
      newSquares[square] = turn;
      return {squares: newSquares}
    })
  }

  renderSquare(i) {
    const { playerTurn, squares } = this.state;
    return <Square value={squares[i]} player={playerTurn} setValue={() => this.setValue(i)} changeTurn={this.changeTurn} />;
  }

  render() {
    const { playerTurn, squares } = this.state;
    var status = "Next player: " + playerTurn;

    let winner = calculateWinner(squares);
    if (winner) {
      alert("ganó " + winner);
    }

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
  for (let i = 0; i < lines.length; i++) {
    var [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
