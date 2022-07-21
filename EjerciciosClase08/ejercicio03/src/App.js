import React, { Component } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Logout from "./Logout";

import { generateId } from "./helpers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm />
          <TodoList />
        </div>
        <Logout />
      </div>
    );
  }
}

export default App;
