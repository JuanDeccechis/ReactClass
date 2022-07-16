import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import LanguageContext from './LanguageContext'

const App = (props) => {
  return (
    <LanguageContext.Consumer>
      {
        language => (
          <div>
            <div className="App-header">
              <h2>React Todos</h2>
              <h4>{language == 'es' ? 'Hola' : 'Hi'} {props.username}</h4>
              <button className="button" onClick={props.onLogout}>
              {language == 'es' ? 'Salir' : 'Logout'}
              </button>
            </div>
            <div className="Todo-App">
              <TodoForm />
              <TodoList />
            </div>
          </div>
        )
      }
    </LanguageContext.Consumer>
  );
};

export default App;