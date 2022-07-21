import React, { Component } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { generateId } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  /*handleSubmit(currentTodo) {
    const newId = generateId();
    const newTodo = { id: newId, name: currentTodo, isComplete: false };
    / * //Mutando
    var updatedTodos = this.state.todos;
    updatedTodos.push(newTodo);* /
    const updatedTodos = [...this.state.todos, newTodo];

    this.setState({
      todos: updatedTodos
    });
  }

  handleCheck = (id) => {
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

  handleDelete = (event, id) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter(function(item) { 
          return item.id !== id ;
        })
        /*todos: prevState.todos.find((element) => {
          return element.id === id;
        })* /
      } 
    })
  }*/

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm  />
          <TodoList  />
        </div>
      </div>
    );
  }
}

export default App;
