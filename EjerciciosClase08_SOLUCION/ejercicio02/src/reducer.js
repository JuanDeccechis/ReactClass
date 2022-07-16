import { types } from "./actions";

const initialState = {
  auth: {
    isLoggedIn: false,
    username: '',
    age: ''
  }
};

const reducer = (state = initialState, action) => {
  if (action.type === types.LOGIN) {
    return {
      ...state,
      auth: { 
        isLoggedIn: true,
        username: action.payload.username,
        age: action.payload.age 
      }
    };
  }
  if (action.type === types.LOGOUT) {
    return {
      ...state,
      auth: { 
        isLoggedIn: false,
        username: '',
        age: ''
      }
    };
  }
  return state;
};
export default reducer;
