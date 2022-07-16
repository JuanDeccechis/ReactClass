import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = props => {
  return (
    <div>
      <ul>
        {props.todos.map(todo =>
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isComplete={todo.isComplete}
          />
        )}

      </ul>
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

TodoList.defaultProps = {
  todos: []
};
