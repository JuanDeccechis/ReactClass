import { generateId } from "./helpers";
import { types } from "./actions";

const initialState = {
  filter: "All"
};

const filterReducer = (state = initialState, action) => {
  
  if (action.type === types.SET_FILTER) {
    console.log("filter: ");
    console.log(action.payload)
    return {...state, filter: action.payload };
  }

  return state;
};

export default filterReducer;
