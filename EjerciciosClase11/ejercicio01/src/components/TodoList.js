import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo =>
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
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

TodoList.defaultProps = {
  todos: []
};
