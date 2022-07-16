import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';

class App extends Component {
  state = {
    user: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h1> Add User </h1>
          <UserForm />

          {this.state.user && 
            <React.Fragment >
              <h3> User Added: </h3>
              <UserForm user={this.state.user}/>
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default App;
