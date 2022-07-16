import React from "react";
import App from "./App";

class LoginManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      age: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleLogin() {
    if(this.state.age != '' && this.state.username != '') {
      this.setState({
        isLoggedIn: true
      });
    }
    else {
      alert('You need to complete the information');
    }
    
  }
  handleLogout() {
    this.setState({
      isLoggedIn: false
    });
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        {!isLoggedIn &&
          <div style={{ textAlign: 'center'}}>
            <h1> Welcome to my App </h1>
            <input
              id="input"
              placeholder="Enter your name"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              id="input"
              placeholder="Enter your age"
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <button className="button" onClick={this.handleLogin}>
              Login
            </button>
          </div>}

        {isLoggedIn && <App onLogout={this.handleLogout} username={this.state.username} age={this.state.age}/>}
      </div>
    );
  }
}

export default LoginManager;
