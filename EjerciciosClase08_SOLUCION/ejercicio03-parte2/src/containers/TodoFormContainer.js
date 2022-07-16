import { connect } from "react-redux";
import { addTodo } from "../actions.js";

import TodoForm from '../components/TodoForm';

const mapStateToProps = ({auth}) => {
  return {
    username: auth.user ? auth.user.name : ''
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoLocal: (text, username) => {
      return dispatch(addTodo(text, username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
