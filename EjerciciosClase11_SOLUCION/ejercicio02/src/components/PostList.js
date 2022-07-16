import React from 'react';

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  postContainer: { 
    border: '1px solid blue',
    width: 200,
    margin: 10,
    padding: 10
  }
}

const PostList = (props) => {
  return (
    <div style={styles.listContainer}>
      <h1>Post List:</h1>
      {props.posts.map(function(post, index) {
        return (
          <div key={post.id} style={styles.postContainer}>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </div>
        );
      })}
    </div>
  )
}

export default PostList;