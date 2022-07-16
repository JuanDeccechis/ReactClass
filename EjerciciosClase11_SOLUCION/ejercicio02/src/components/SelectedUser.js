import React from 'react';
import { connect } from "react-redux";

import PostList from './PostList';

class SelectedUser extends React.Component {

  render() {
    return (
      <div>
        {this.props.selectedUser !== null ?
          <div>
            <h1>Selected User: {this.props.selectedUser.username}</h1> 

            {this.props.loadingPosts ? 
              <h4>loading posts</h4> :
              <PostList posts={this.props.posts}/>}
          </div>
          :
          <h1>No selected user</h1>}
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    posts: state.posts,
    loadingPosts: state.loadingPosts
  };
};


export default connect(mapStateToProps, null)(SelectedUser);