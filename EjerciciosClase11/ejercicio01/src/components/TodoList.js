import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getTodosFiltered } from '../actions';

class TodoList extends React.Component {

  componentDidMount(){
    this.props.getTodosFilteredLocal(this.props.visibilityFilter);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visibilityFilter !== this.props.visibilityFilter) {
      console.log("updated");
      this.props.getTodosFilteredLocal(this.props.visibilityFilter);
    }
  }

  render() {
    const { visibilityFilter, todos } = this.props;
    return (
      <div>
        {this.props.fetching
          ? <h1> loading </h1>
          : <ul>
          {todos && todos.map(todo =>
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              isComplete={todo.isComplete}
            />
          )}

        </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
    fetching: state.fetching
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
