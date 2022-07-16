import React from "react";
import App from "./App";
import { connect } from "react-redux";
import { login } from "./actions.js";

class LoginManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleLogin() {
    if(this.state.age != '' && this.state.username != '') {
      this.props.loginLocal(this.state.username, this.state.age)
    }
    else {
      alert('You need to complete the information');
    }
    
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {!isLoggedIn &&
          <div>
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

          {isLoggedIn && <App />}
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
    loginLocal: (username, age) => {
      return dispatch(login(username, age));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginManager);
