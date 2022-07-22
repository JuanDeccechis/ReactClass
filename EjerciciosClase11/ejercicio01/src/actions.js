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

export const todosRequest = () => {
  return {
    type: types.FETCH_TODOS_START,
  };
};

export const todosSuccess = todos => {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    payload: todos
  };
};

export const todosFailure = () => {
  return {
    type: types.FETCH_TODOS_FAIL,
  };
};

//-------------------------esto sería la funcion del sagas, en la proxima clase
export function getTodosFiltered(filter) {
  return function(dispatch) {
    dispatch(todosRequest());
    return api.fetchTodos(filter).then(
      response => {
        dispatch(todosSuccess(response));
      },
      error => {
        dispatch(todosFailure());
      }
    );
  };
}