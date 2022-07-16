import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => {
  return (
    <li>
      <span className="delete-item">
        <a
          href="#"
          onClick={event => {
            event.preventDefault();
            props.handleRemove(props.id);
          }}
        >
          X
        </a>
      </span>
      <input
        type="checkbox"
        checked={props.isComplete}
        onChange={() => props.handleToggle(props.id)}
      />
      {props.name}
    </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
};
