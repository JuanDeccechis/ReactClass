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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {this.setState({value: event.target.value});}
  handleSubmit(event) {event.preventDefault(); alert("input " + this.state.value);}

  render() {
    const { placeholder, label } = this.props;
    const { value } = this.state;
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="input">{label}</label>
        <input
          id="input"
          placeholder={placeholder}
          type="text"
          autoComplete="off"
          value = {value}
          onChange = {this.handleChange}
        />
        <button className="button" type="submit" disabled={value === "" ? true : false}>
          Submit
        </button>
      </form>
    );
  }
}

InputForm.defaultProps = { label:"Name", placeholder:"Enter your name" }
InputForm.propTypes = {label: propTypes.string.isRequired, placeholder: propTypes.string.isRequired};

export default InputForm;
