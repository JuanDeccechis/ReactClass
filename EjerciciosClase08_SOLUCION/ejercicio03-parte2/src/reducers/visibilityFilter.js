import { types } from "../actions";

const reducer = (state = "SHOW_ALL", action) => {
  
  if (action.type === types.SET_VISIBILITY_FILTER) {
    return action.payload
  }

  return state;
};

export default reducer;
