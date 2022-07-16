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
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
