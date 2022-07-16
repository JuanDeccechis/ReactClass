import { types } from "../actions";

const initialState = {
  user: {
    name: ''
  },
}

const reducer = (state = initialState, action) => {
  if (action.type === types.LOGIN) {
    return {
      ...state,
      user: {
        name: action.payload
      }
    }
  }

  if (action.type === types.LOGOUT) {
    return {
      ...state,
      user: {
        name: ''
      }
    }
  }

  return state;
};

export default reducer;