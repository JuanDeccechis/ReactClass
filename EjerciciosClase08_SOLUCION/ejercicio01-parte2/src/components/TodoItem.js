import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toogleTodo, removeTodo } from "../actions.js";

const TodoItem = props => {
  return (
    <li>
      <span className="delete-item">
        <a
          href="#"
          onClick={event => {
            event.preventDefault();
            props.removeTodo(props.id);
          }}
        >
          X
        </a>
      </span>
      <input
        type="checkbox"
        checked={props.isComplete}
        onChange={() => props.toogleTodo(props.id)}
      />
      {props.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toogleTodo: id => {
      return dispatch(toogleTodo(id));
    },
    removeTodo: id => {
      return dispatch(removeTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
};
