import { types } from './actions'
import { generateId } from './helpers';

const initialState = { todos: [
    { id: 1, name: "Learn React", isComplete: false },
    { id: 2, name: "Learn Redux", isComplete: true },
    { id: 3, name: "Learn ReactNative ", isComplete: false },
    { id: 4, name: "Learn NodeJS", isComplete: false }
  ] 
};

const reducer = (state = initialState, action) => {
    if (action.type === types.ADD_TODO) {
        const newId = generateId();
        const newTodo = { id: newId, name: action.payload, isComplete: false };
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
        const updatedTodos = state.todos.filter(function(item) { 
            return item.id !== action.payload;
        })
        return {
            ...state,
            todos: updatedTodos
        };
    }
    return state;
};

export default reducer;