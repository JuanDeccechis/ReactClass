import React, { Component } from "react";
import "./App.css";

const LoginButton = props => {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
};

const LogoutButton = props => {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
};

const UserGreeting = props => {
  return <h1>Welcome back!</h1>;
};
const GuestGreeting = props => {
  return <h1>Please sign up.</h1>;
};

const Greeting = props => {
  /* TODO */
  return <GuestGreeting />;
};

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    /* TODO */
  }

  handleLogoutClick() {
    /* TODO */
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    /* TODO */
    button = <LoginButton />;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
