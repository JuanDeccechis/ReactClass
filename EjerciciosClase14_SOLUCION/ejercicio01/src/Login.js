import React, { Component } from "react";

import { connect } from "react-redux";
import { login, logout } from "./actions.js";
import LanguageChanger from './LanguageChanger';
import LanguageContext from './LanguageContext'
import App from './App';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleLogin() {
    if(this.state.name != '') {
      this.props.doLogin(this.state.name);
      this.setState({ name: '' });
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
    const field = event.target.name;
    this.setState({ [field]: value });
  }
  render() {
    const isLoggedIn = this.props.username.length > 0;
    return (
      <LanguageChanger>
        <LanguageContext.Consumer>
          {
            language => (
              <div className="App">
              {!isLoggedIn &&
                <div>
                  <h1> {language == 'es' ? 'Bienvenido a mi App' : 'Welcome to my App'} </h1>
                  <div style={{ margin: '10px'}}>
                    <input
                      placeholder={language == 'es' ? "Ingresa tu nombre" : "Enter your name"}
                      type="text"
                      name="name"
                      value={this.state.value} onChange={this.handleChange}
                    />
                  </div>
                  
                  <button style={{ margin: '10px'}} className="button" onClick={this.handleLogin}>
                    {language == 'es' ? 'Ingresar' : 'Login'}
                  </button>
                </div>}

                {isLoggedIn && 
                  <App username={this.props.username} onLogout={this.handleLogout}/>
                }
              </div>
            )
          }
        </LanguageContext.Consumer> 
      </LanguageChanger>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.user ? state.user.name : ''
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);