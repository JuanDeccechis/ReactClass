import React from 'react';
import { connect } from "react-redux";
import { fetchUsersStart, selectUser, fetchPostsStart } from "../actions";

import UserList from './UserList';

class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersLocal();
  }

  onSelectUserLocal = (user) => {
    this.props.onSelectUser(user);
    this.props.onFetchPost(user);
  }

  render() {
    if(this.props.loadingUsers) {
      return <h3> Loading users.. </h3>
    }
    else {
      return <UserList 
      users={this.props.users} 
      onSelectUser={this.onSelectUserLocal} />
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
    getUsersLocal: () => dispatch(fetchUsersStart()),
    onSelectUser: (user) => dispatch(selectUser(user)), 
    onFetchPost: (user) => dispatch(fetchPostsStart(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);