import axios from 'axios';

export const types = {
  FETCH_USERS_START: "FETCH_USERS_START",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAIL: "FETCH_USERS_FAIL",
  SELECT_USER: "SELECT_USER",
  FETCH_POSTS_START: "FETCH_POSTS_START",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL"
};

export const fetchUsersStart = () => {
  return {
    type: types.FETCH_USERS_START
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFail = () => {
  return {
    type: types.FETCH_USERS_FAIL
  };
};

// export function getUsers() {
//   return function(dispatch) {
//     dispatch(fetchUsersStart());
//     return axios.get('https://jsonplaceholder.typicode.com/users').then(
//       response => {
//         if(response.status === 200)
//         dispatch(fetchUsersSuccess(response.data));
//       },
//       error => {
//         dispatch(fetchUsersFail());
//       }
//     );
//   };
// }

export const selectUser = (user) => {
  return {
    type: types.SELECT_USER,
    payload: user
  };
}

// export const selectUserAndGetPosts = (user) => (dispatch) => {
//   dispatch(selectUser(user));
//   dispatch(fetchPostsStart(user.id));
// }



export const fetchPostsStart = () => {
  return {
    type: types.FETCH_POSTS_START
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts
  };
};

export const fetchPostsFail = () => {
  return {
    type: types.FETCH_POSTS_FAIL
  };
};

// export function getPosts(userId) {
//   return function(dispatch) {
//     dispatch(fetchPostsStart());
//     return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
//       response => {
//         if(response.status === 200)
//         dispatch(fetchPostsSuccess(response.data));
//       },
//       error => {
//         dispatch(fetchPostsFail());
//       }
//     );
//   };
// }