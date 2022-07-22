import React from 'react';

import PostList from './PostList';
import { connect } from "react-redux";

class SelectedUser extends React.Component {

  render() {
    console.log(this.props.selectedUser);
    return (
      <div>
        {this.props.selectedUser !== null ?
          <div>
            <h1>Selected User: {this.props.selectedUser.name}</h1> 
            {this.props.selectedUser.username}
            {/* COMPLETAR CON POSTLIST, si no esta cargando */}
          </div>
          :
          <h1>No selected user</h1>}
      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps)(SelectedUser);