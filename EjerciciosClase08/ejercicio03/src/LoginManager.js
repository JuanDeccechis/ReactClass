import React from "react";
import App from "./App";

import { connect } from "react-redux";
import { login, logout } from "./actions.js";

class LoginManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleLogin() {
    const { age, username } = this.state;
    if(age != '' && username != '') {
      this.props.onLogin(username, age);
    }
    else {
      alert('You need to complete the information');
    }
    
  }
  handleLogout() {
    this.props.onLogout();
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const { username, age } = this.state;
    const { isLoggedIn } = this.props;
console.log(isLoggedIn);
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

        {isLoggedIn && <App onLogout={this.handleLogout} username={username} age={age}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, age) => {
      return dispatch(login(username, age));
    },
    onLogout: () => {
      return dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginManager);
