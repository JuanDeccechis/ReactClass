import { types } from "./actions";

const initialState = {
  users: [],
  loadingUsers: false,
  selectedUser: null,
  error: '',
  posts: [],
  loadingPosts: false
};

const reducer = (state = initialState, action) => {
  if (action.type === types.FETCH_USERS_START) {
    return { ...state, fetching: true, users: [] }
  }
  if (action.type === types.FETCH_USERS_SUCCESS) {
    return { ...state, fetching: false, users: action.payload }
  }
  if (action.type === types.FETCH_USERS_FAIL) {
    return { ...state, fetching: false }
  }
  if (action.type === types.FETCH_USER_START) {
    return { ...state, fetching: true, selectedUser: null }
  }
  if (action.type === types.FETCH_USER_SUCCESS) {
    return { ...state, fetching: false, selectedUser: action.payload }
  }
  if (action.type === types.FETCH_USER_FAIL) {
    return { ...state, fetching: false }
  }

  return state;
};

export default reducer;
