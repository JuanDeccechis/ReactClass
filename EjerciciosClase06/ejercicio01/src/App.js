import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserListContainer />
      </div>
    );
  }
}

class UserListContainer extends Component {
  //constructor(props) {}
  //componentDidMount() {}
  render() {
    return (
      <div>
        <h1> Usuarios de Github:</h1>
        <div>
          <UserList users={[]} />
        </div>
      </div>
    );
  }
}

const UserList = props => {
  return (
    <ul>
      {props.users.map((user, index) => {
        return (
          <li key={index}>
            <div className="UserInfo">
              <img className="Avatar" src={""} alt={""} />
              <div className="UserInfo-name">
                Id:
              </div>
              <div className="UserInfo-name">
                Login:
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({}))
};

export default App;
