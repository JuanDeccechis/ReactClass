import { types } from "./actions";

const initialState = {
  users: [],
  loadingUsers: false,
  selectedUser: {},
  error: '',
  posts: [],
  loadingPosts: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_USERS_START: {
      return {
        ...state,
        loadingUsers: true
      }
    }
    case types.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loadingUsers: false,
        error: '',
        users: action.payload
      }
    }
    case types.FETCH_USERS_FAIL: {
      return {
        ...state,
        loadingUsers: false,
        error: 'An error has ocurred getting users.'
      }
    }
    case types.SELECT_USER: {
      return {
        ...state,
        selectedUser: action.payload
      }
    }
    case types.FETCH_POSTS_START: {
      return {
        ...state,
        loadingPosts: true
      }
    }
    case types.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        loadingPosts: false,
        error: '',
        posts: action.payload
      }
    }
    case types.FETCH_POSTS_FAIL: {
      return {
        ...state,
        loadingPosts: false,
        error: 'An error has ocurred getting posts.'
      }
    }
    default: 
      return state;
  }
};

export default reducer;
