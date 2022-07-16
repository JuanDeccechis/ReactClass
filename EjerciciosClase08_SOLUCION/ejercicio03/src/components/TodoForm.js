import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../actions.js";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitLocal = this.handleSubmitLocal.bind(this);
  }
  handleInputChange(event) {
    const value = event.target.value;

    this.setState({
      value
    });
  }
  handleSubmitLocal(event) {
    event.preventDefault();
    if (this.state.value) {
      //Invocamos la funcion del padre
      this.props.addTodoLocal(this.state.value, this.props.username);
      //Vaciamos el input
      this.setState({
        value: ""
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmitLocal}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.user ? state.user.name : ''
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
