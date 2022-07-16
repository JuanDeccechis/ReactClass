import { generateId } from "../helpers";
import { types } from "../actions";

const initialState = [
    { id: 1, name: "Learn React", isComplete: false },
    { id: 2, name: "Learn Redux", isComplete: true },
    { id: 3, name: "Learn ReactNative ", isComplete: false },
    { id: 4, name: "Learn NodeJS", isComplete: false }
  ]

const reducer = (state = initialState, action) => {

  if (action.type === types.ADD_TODO) {
    const newId = generateId();
    const newTodo = { id: newId, name: action.payload.text, isComplete: false, owner: action.payload.username };
    const updatedTodos = [...state, newTodo];
    return updatedTodos;
  }

  if (action.type === types.TOOGLE_TODO) {
    const index = state.findIndex(item => item.id === action.payload);
    const todo = state[index];
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    const updatedTodos = [
      ...state.slice(0, index),
      updatedTodo,
      ...state.slice(index + 1)
    ];

    return updatedTodos;
  }
  if (action.type === types.REMOVE_TODO) {
    const removeIndex = state.findIndex(
      item => item.id === action.payload
    );
    const updatedTodos = [
      ...state.slice(0, removeIndex),
      ...state.slice(removeIndex + 1)
    ];

    return updatedTodos;
  }

  return state;
};

export default reducer;
