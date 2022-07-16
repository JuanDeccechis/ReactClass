import React, { Component } from "react";
import PropTypes from "prop-types";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;

    this.setState({
      value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.props.id, this.state.value);
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="input">{this.props.label}</label>
        <input
          id="input"
          placeholder={this.props.placeholder}
          type="text"
          value={this.state.value}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button className="button" type="submit" disabled={!this.state.value}>
          Submit
        </button>
      </form>
    );
  }
}

InputForm.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

InputForm.defaultProps = {
  label: "Username",
  placeholder: "Enter your username"
};

export default InputForm;
