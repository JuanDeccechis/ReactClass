import React from 'react';
import { connect } from "react-redux";
import { getUsers, selectUserAndGetPosts } from "../actions";

import UserList from './UserList';

class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersLocal();
  }
  render() {
    if(this.props.loadingUsers) {
      return <h3> Loading users.. </h3>
    }
    else {
      return <UserList 
      users={this.props.users} 
      onSelectUser={this.props.onSelectUser} />
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    loadingUsers: state.loadingUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersLocal: () => dispatch(getUsers()),
    onSelectUser: (user) => dispatch(selectUserAndGetPosts(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);