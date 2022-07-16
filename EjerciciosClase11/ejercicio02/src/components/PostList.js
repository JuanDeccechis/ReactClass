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
      { /* COMPLETAR HACIENDO UN MAP SOBRE LOS POSTS QUE LLEGAN POR PROPS */ }
    </div>
  )
}

export default PostList;