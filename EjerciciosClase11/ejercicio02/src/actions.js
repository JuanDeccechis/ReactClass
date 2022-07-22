import axios from 'axios';

export const types = {
  FETCH_USERS_START: "FETCH_USERS_START",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAIL: "FETCH_USERS_FAIL",
  FETCH_USER_START: "FETCH_USER_START",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_FAIL: "FETCH_USER_FAIL",
};


export const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_START,
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = () => {
  return {
    type: types.FETCH_USERS_FAIL,
  };
};

export const fetchUserRequest = (id) => {
  return {
    type: types.FETCH_USER_START,
    payload: id
  };
};

export const fetchUserSuccess = userData => {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload: userData
  };
};

export const fetchUserFailure = () => {
  return {
    type: types.FETCH_USER_FAIL,
  };
};
//-------------------------esto sería la funcion del sagas, en la proxima clase
export function fetchUsers(filter) {
  return function(dispatch) {
    
    console.log("call to get users");
    dispatch(fetchUsersRequest());
    return axios.get(`https://jsonplaceholder.typicode.com/users`).then(
      response => {
        console.log("resp");
        console.log(response);
        dispatch(fetchUsersSuccess(response.data));
      },
      error => {
        console.log("error");
        console.log(error);
        dispatch(fetchUsersFailure());
      }
    );
  };
}

export function fetchUser(id) {
  return function(dispatch) {
    
    console.log("call to get user by id");
    dispatch(fetchUserRequest(id));
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      response => {
        console.log("resp user data");
        console.log(response);
        dispatch(fetchUserSuccess(response.data));
      },
      error => {
        console.log("error");
        console.log(error);
        dispatch(fetchUserFailure());
      }
    );
  };
}
