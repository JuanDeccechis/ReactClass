import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserListContainer from './components/UserListContainer';
import SelectedUser from './components/SelectedUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserListContainer />
        <SelectedUser />
      </div>
    );
  }
}

export default App;
