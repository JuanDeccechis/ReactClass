import { generateId } from "./helpers";
import { types } from "./actions";

const initialState = {
  auth: {
    isLoggedIn: false,
    username: '',
    age: ''
  },
  todos: [
    { id: 1, name: "Learn React", isComplete: false, owner: "Admin" },
    { id: 2, name: "Learn Redux", isComplete: true, owner: "Admin" },
    { id: 3, name: "Learn ReactNative ", isComplete: false, owner: "Admin" },
    { id: 4, name: "Learn NodeJS", isComplete: false, owner: "Admin" }
  ]
};

const reducer = (state = initialState, action) => {
  if (action.type === types.ADD_TODO) {
    const newId = generateId();
    const newTodo = { id: newId, name: action.payload, isComplete: false, owner: state.auth.username };
    const updatedTodos = [...state.todos, newTodo];
    return {
      ...state,
      todos: updatedTodos
    };
  }
  if (action.type === types.TOOGLE_TODO) {
    const index = state.todos.findIndex(item => item.id === action.payload);
    const todo = state.todos[index];
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    const updatedTodos = [
      ...state.todos.slice(0, index),
      updatedTodo,
      ...state.todos.slice(index + 1)
    ];

    return {
      ...state,
      todos: updatedTodos
    };
  }
  if (action.type === types.REMOVE_TODO) {
    const removeIndex = state.todos.findIndex(
      item => item.id === action.payload
    );
    const updatedTodos = [
      ...state.todos.slice(0, removeIndex),
      ...state.todos.slice(removeIndex + 1)
    ];

    return {
      ...state,
      todos: updatedTodos
    };
  }
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
