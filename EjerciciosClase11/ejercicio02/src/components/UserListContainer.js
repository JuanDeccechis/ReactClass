import React from 'react';
import UserList from './UserList';
import { connect } from "react-redux";
import { fetchUsers } from '../actions';
const users = [
  {
    id: 1,
    name: 'Paul Johnson',
    username: 'Paul',
    email: 'paul@mail.com'
  },
  {
    id: 2,
    name: 'Mary Jane',
    username: 'Mary',
    email: 'mjane@mail.com'
  },
  {
    id: 3,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@mail.com'
  }
]

class UserListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.users !== this.props.users) {
      console.log("updated");
      console.log(this.props.users);
      //this.props.getTodosFilteredLocal(this.props.visibilityFilter);
    }
  }

  render() {
    const { users } = this.props;
    console.log(users.length);
    return (
      <div>
        {users && users.length > 0 ? 
          <UserList users={users} />      
        :
          <h1>Loading</h1>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers : () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);