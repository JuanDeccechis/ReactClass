import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  userContainer: { 
    border: '1px solid grey',
    width: 300,
    margin: 10,
    padding: 10
  }
}

class UserList extends Component{
  

  handleSelectUser = (id) => {
    console.log(id);
    this.props.fetchUserLocal(id);
  }

  render() {
    console.log("llega a list");
    return (
      <div style={styles.listContainer}>
        <h1>User List:</h1>
        {this.props.users.map((user, index) => {
          return (
            <div key={user.id} style={styles.userContainer} onClick={() => this.handleSelectUser(user.id)}>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          );
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserLocal : (id) => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);