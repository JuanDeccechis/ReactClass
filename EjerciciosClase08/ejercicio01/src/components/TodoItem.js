import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from '../actions';

const TodoItem = props => {
  return (
    <li>
      <span className="delete-item">
        <a href="#" onClick={(event) => {event.preventDefault(); props.removeTodoLocal(props.id)}}>X</a>
      </span>
      <input type="checkbox" defaultChecked={props.isComplete} onClick={() => props.toggleTodoLocal(props.id)} /> {props.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodoLocal: text => {
      return dispatch(toggleTodo(text));
    },
    removeTodoLocal: text => {
      return dispatch(removeTodo(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
};
