import { generateId } from "./helpers";
import { types } from "./actions";

const initialState = {
    isLoggedIn: false,
    username: '',
    age: ''
  
};

const authReducer = (state = initialState, action) => {
 
  if (action.type === types.LOGIN) {
    console.log("red login");
    return {
      ...state,
        isLoggedIn: true,
        username: action.payload.username,
        age: action.payload.age 
    };
  }
  if (action.type === types.LOGOUT) {
    return {
      ...state,
        isLoggedIn: false,
        username: '',
        age: ''
    };
  }
  return state;
};

export default authReducer;
