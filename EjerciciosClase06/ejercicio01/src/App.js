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
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const _this = this;
    axios.get("https://api.github.com/users")
    .then(function (response) {
      console.log(response.data);
      _this.setState({ users: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
 
  }
  
  render() {
    const { users } = this.state;
    return (
      <div>
        <h1> Usuarios de Github:</h1>
        <div>
          <UserList users={users} />
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
              <img className="Avatar" src={user.avatar_url} alt={""} />
              <div className="UserInfo-name">
                Id: {user.id}
              </div>
              <div className="UserInfo-name">
                Login: {user.login}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }))
};

export default App;
