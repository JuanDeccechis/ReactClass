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
          onClick={() => {
            console.log("Click en All");
            //Invocar una funcion que dispatchee la accion de cambiar el visibilityFilter a all
          }}
        >
          All
        </a>
        <a
          className="filterLink"
          onClick={() => {
            console.log("Click en Active");
            //Invocar una funcion que dispatchee la accion de cambiar el visibilityFilter a active
          }}
        >
          Active
        </a>
        <a
          className="filterLink"
          onClick={() => {
            console.log("Click en Completed");
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default FilterTodos;

FilterTodos.defaultProps = {
  currentFilter: "Sin filtro aun"
};
