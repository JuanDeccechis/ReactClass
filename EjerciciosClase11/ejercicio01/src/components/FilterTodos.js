import React from "react";
import { connect } from "react-redux";
import { changeVisibilityFilter } from "../actions.js";

const FilterTodos = props => {
  const { currentFilter } = props;
  return (
    <div>
      <p> CurrentFilter is: {currentFilter} </p>
      <p>
        Show:
        {" "}
        <a
          className={`${currentFilter === "All"? 'active ': ''} filterLink`}
          onClick={() => {
            console.log("Click en All");
            props.changeVisibilityFilterLocal("All");
            //Invocar una funcion que dispatchee la accion de cambiar el visibilityFilter a all
          }}
        >
          All
        </a>
        <a
          className={`${currentFilter === "Active"? 'active ': ''} filterLink`}
          onClick={() => {
            console.log("Click en Active");
            props.changeVisibilityFilterLocal("Active");
            //Invocar una funcion que dispatchee la accion de cambiar el visibilityFilter a active
          }}
        >
          Active
        </a>
        <a
          className={`${currentFilter === "Completed"? 'active ': ''} filterLink`}
          onClick={() => {
            console.log("Click en Completed");
            props.changeVisibilityFilterLocal("Completed");
            //Invocar una funcion que dispatchee la accion de cambiar el visibilityFilter a completed
          }}
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
    changeVisibilityFilterLocal: filter => dispatch(changeVisibilityFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodos);

FilterTodos.defaultProps = {
  currentFilter: "Sin filtro aun"
};
