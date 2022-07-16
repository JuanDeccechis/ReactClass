import React from 'react';

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

const UserList = (props) => {
  return (
    <div style={styles.listContainer}>
      <h1>User List:</h1>
      {props.users.map(function(user, index) {
        return (
          <div key={user.id} style={styles.userContainer}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        );
      })}
    </div>
  )
}

export default UserList;