import React, { Component } from "react";
import "./App.css";

import TodoForm from "./containers/TodoFormContainer";
import TodoList from "./containers/TodoListContainer";
import { connect } from "react-redux";
import { login, logout } from "./actions.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleLogin() {
    if(this.state.value != '') {
      this.props.doLogin(this.state.value);
      this.setState({ value: '' });
    }
    else {
      alert('You need to complete the information');
    }
  }
  handleLogout() {
    this.props.doLogout();
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
  }
  render() {
    const isLoggedIn = this.props.username.length > 0;
    return (
      <div className="App">

      {!isLoggedIn &&
        <div style={{ textAlign: 'center'}}>
          <h1> Welcome to my App </h1>
          <input
            placeholder="Enter your name"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className="button" onClick={this.handleLogin}>
            Login
          </button>
        </div>}

        {isLoggedIn && 
          <div>
            <div className="App-header">
              <h2>React Todos</h2>
              <h4>Hi {this.props.username}</h4>
              <button className="button" onClick={this.handleLogout}>
                Logout
              </button>
            </div>
            <div className="Todo-App">
              <TodoForm />
              <TodoList />
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    username: auth.user ? auth.user.name : ''
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doLogin: username => {
      return dispatch(login(username));
    },
    doLogout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
