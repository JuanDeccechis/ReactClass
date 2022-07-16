import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getTodosFiltered } from "../actions";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTodosFilteredLocal(this.props.visibilityFilter);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visibilityFilter !== this.props.visibilityFilter) {
      this.props.getTodosFilteredLocal(this.props.visibilityFilter);
    }
  }
  render() {
    return (
      <div>
        {this.props.loading
          ? <h1> loading </h1>
          : <ul>
              {this.props.todos.map(todo =>
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  name={todo.name}
                  isComplete={todo.isComplete}
                />
              )}

            </ul>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTodosFilteredLocal: filter => dispatch(getTodosFiltered(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

TodoList.defaultProps = {
  todos: []
};
