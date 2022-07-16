import React, { Component } from "react";
import propTypes from "prop-types";

class InputForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: this.props.label,
      placeholder: this.props.placeholder,
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {this.setState({value: event.target.value});}
  handleSubmit(event) {event.preventDefault(); alert("input " + this.state.value);}

  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="input">{this.state.label}</label>
        <input
          id="input"
          placeholder={this.state.placeholder}
          type="text"
          autoComplete="off"
          value = {this.state.value}
          onChange = {this.handleChange}
        />
        <button className="button" type="submit" disabled={this.state.value === "" ? true : false}>
          Submit
        </button>
      </form>
    );
  }
}
InputForm.propTypes = {label: propTypes.string.isRequired, placeholder: propTypes.string.isRequired};
export default InputForm;
