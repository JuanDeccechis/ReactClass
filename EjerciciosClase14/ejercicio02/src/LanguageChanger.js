import React, { Component } from 'react';

class LanguageChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'es'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    const field = event.target.name;
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div style={{ margin: '10px'}}>
        <select
          value={this.state.language} 
          onChange={this.handleChange}
          name="language"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        
          {this.props.children}
      </div>
    );
  }
}

export default LanguageChanger;