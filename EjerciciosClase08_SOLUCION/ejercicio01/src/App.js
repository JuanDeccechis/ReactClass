import React, { Component } from "react";
import "./App.css";
import { generateId } from "./helpers";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

  handleToggle(id) {
    const index = this.state.todos.findIndex(item => item.id === id);
    const todo = this.state.todos[index];
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    const updatedTodos = [
      ...this.state.todos.slice(0, index),
      updatedTodo,
      ...this.state.todos.slice(index + 1)
    ];

    this.setState((previousState, props) => ({
      todos: updatedTodos
    }));
  }

  handleRemove(id) {
    const removeIndex = this.state.todos.findIndex(item => item.id === id);
    const updatedTodos = [
      ...this.state.todos.slice(0, removeIndex),
      ...this.state.todos.slice(removeIndex + 1)
    ];
    this.setState((previousState, props) => ({
      todos: updatedTodos
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleSubmit={this.handleSubmit} />
          <TodoList
            todos={this.state.todos}
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
