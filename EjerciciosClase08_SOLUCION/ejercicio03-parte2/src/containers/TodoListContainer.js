import TodoList from "../components/TodoList";

import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions.js";



const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

