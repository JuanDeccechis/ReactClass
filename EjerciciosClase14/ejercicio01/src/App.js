import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = (props) => {
  return (
    <div>
      <div className="App-header">
        <h2>React Todos</h2>
        <h4>Hi {props.username}</h4>
        <button className="button" onClick={props.onLogout}>
          Logout
        </button>
      </div>
      <div className="Todo-App">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;