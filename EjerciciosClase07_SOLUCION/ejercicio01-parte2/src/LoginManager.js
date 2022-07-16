import React from "react";
import App from "./App";

class LoginManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin() {
    this.setState({
      isLoggedIn: true
    });
  }
  handleLogout() {
    this.setState({
      isLoggedIn: false
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        {!isLoggedIn &&
          <div>
            <h1> Welcome to my App </h1>
            <button className="button" onClick={this.handleLogin}>
              Login
            </button>
          </div>}

        {isLoggedIn && <App onLogout={this.handleLogout} />}
      </div>
    );
  }
}

export default LoginManager;
