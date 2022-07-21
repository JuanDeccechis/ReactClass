import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../actions";

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
      //this.props.handleSubmit(this.state.value);
      this.props.addTodoLocal(this.state.value);
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoLocal: text => {
      return dispatch(addTodo(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
