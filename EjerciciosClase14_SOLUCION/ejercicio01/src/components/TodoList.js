import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions.js";

import LanguageContext from '../LanguageContext'

const TodoList = props => {
  let todos = props.todos;
  if(props.filter === "SHOW_COMPLETED") {
    todos = todos.filter((todo) => todo.isComplete);
  }
  else if (props.filter === "SHOW_PENDING"){
    todos = todos.filter((todo) => !todo.isComplete);
  }

  return (
    <LanguageContext.Consumer>
      {
        language => (
          <div>
            <button onClick={() => props.setVisibilityFilter('SHOW_ALL')} disabled={props.filter === "SHOW_ALL"}>
              {language == 'es' ? 'Mostrar Todos' : 'Show All'}
            </button>
            <button onClick={() => props.setVisibilityFilter('SHOW_COMPLETED')} disabled={props.filter === "SHOW_COMPLETED"}>
              {language == 'es' ? 'Mostrar Completados' : 'Show Completed'}
            </button>
            <button onClick={() => props.setVisibilityFilter('SHOW_PENDING')} disabled={props.filter === "SHOW_PENDING"}>
              {language == 'es' ? 'Mostrar Pendientes' : 'Show Pending'}
            </button>
            <ul>
              {todos.map(todo =>
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  name={todo.name}
                  isComplete={todo.isComplete}
                  owner={todo.owner}
                />
              )}

            </ul>
          </div>
        )
      }
    </LanguageContext.Consumer>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

TodoList.defaultProps = {
  todos: []
};
