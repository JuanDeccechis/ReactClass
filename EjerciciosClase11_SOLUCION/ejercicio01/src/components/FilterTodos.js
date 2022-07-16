import React from "react";
import { connect } from "react-redux";
import { changeVisibilityFilter } from "../actions.js";

const FilterTodos = props => {
  return (
    <div>
      <p> CurrentFilter is: {props.currentFilter} </p>
      <p>
        Show:
        {" "}
        <a
          className="filterLink"
          onClick={() => props.changeVisibilityFilter("all")}
        >
          All
        </a>
        <a
          className="filterLink"
          onClick={() => props.changeVisibilityFilter("active")}
        >
          Active
        </a>
        <a
          className="filterLink"
          onClick={() => props.changeVisibilityFilter("completed")}
        >
          Completed
        </a>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeVisibilityFilter: filter => {
      return dispatch(changeVisibilityFilter(filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodos);

FilterTodos.defaultProps = {
  currentFilter: "Sin filtro aun"
};
