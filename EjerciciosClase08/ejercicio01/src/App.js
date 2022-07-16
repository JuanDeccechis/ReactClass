import React, { Component } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { generateId } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "Learn React", isComplete: false },
        { id: 2, name: "Learn Redux", isComplete: true },
        { id: 3, name: "Learn ReactNative ", isComplete: false },
        { id: 4, name: "Learn NodeJS", isComplete: false }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(currentTodo) {
    const newId = generateId();
    const newTodo = { id: newId, name: currentTodo, isComplete: false };
    /*//Mutando
    var updatedTodos = this.state.todos;
    updatedTodos.push(newTodo);*/
    const updatedTodos = [...this.state.todos, newTodo];

    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleSubmit={this.handleSubmit} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
