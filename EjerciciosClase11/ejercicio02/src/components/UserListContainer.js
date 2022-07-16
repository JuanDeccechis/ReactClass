import React from 'react';
import UserList from './UserList';
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

export default class UserListContainer extends React.Component {

  render() {
    return <UserList users={users} />
  }
}