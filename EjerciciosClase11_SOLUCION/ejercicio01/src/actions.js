import * as api from "./api.js";

export const types = {
  ADD_TODO: "ADD_TODO",
  TOOGLE_TODO: "TOOGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
  FETCH_TODOS_START: "FETCH_TODOS_START",
  FETCH_TODOS_SUCCESS: "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAIL: "FETCH_TODOS_FAIL"
};

export const addTodo = text => {
  return {
    type: types.ADD_TODO,
    payload: text
  };
};

export const toogleTodo = id => {
  return {
    type: types.TOOGLE_TODO,
    payload: id
  };
};

export const removeTodo = id => {
  return {
    type: types.REMOVE_TODO,
    payload: id
  };
};

export const changeVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    payload: filter
  };
};

export const fetchTodosStart = () => {
  return {
    type: types.FETCH_TODOS_START
  };
};

export const fetchTodosSuccess = todos => {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    payload: todos
  };
};

export const fetchTodosFail = () => {
  return {
    type: types.FETCH_TODOS_FAIL
  };
};

export function getTodosFiltered(filter) {
  return function(dispatch) {
    dispatch(fetchTodosStart());
    return api.fetchTodos(filter).then(
      response => {
        dispatch(fetchTodosSuccess(response));
      },
      error => {
        dispatch(fetchTodosFail());
      }
    );
  };
}
