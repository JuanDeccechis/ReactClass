import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { setFilter } from "../actions"

const TodoList = props => {
  console.log(props.filter);
  console.log(props.todos);
  return (
    <div>
      <div className="filters">
        <button onClick={() => props.setFilterLocal("All")}> Show All </button>
        <button onClick={() => props.setFilterLocal("Completed")}> Show Completed </button>
        <button onClick={() => props.setFilterLocal("Pending")}> Show Pending </button>
      </div>
      <ul>
        {props.todos.filter(todo => {
          if (props.filter === "All") return todo ;
          if (props.filter === "Completed") return todo.isComplete;
          if (props.filter === "Pending") return !todo.isComplete;
         } ).map(todo =>
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
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    filter: state.filter.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterLocal: type => { return dispatch(setFilter(type)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

TodoList.defaultProps = {
  todos: []
};
