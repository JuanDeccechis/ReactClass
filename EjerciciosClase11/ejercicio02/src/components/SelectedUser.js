import React from 'react';

import PostList from './PostList';

class SelectedUser extends React.Component {

  render() {
    return (
      <div>
        {this.props.selectedUser !== null ?
          <div>
            <h1>Selected User: COMPLETAR</h1> 

            {/* COMPLETAR CON POSTLIST, si no esta cargando */}
          </div>
          :
          <h1>No selected user</h1>}
      
      </div>
    )
  }
}

export default SelectedUser;