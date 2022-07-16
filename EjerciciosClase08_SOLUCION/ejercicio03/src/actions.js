export const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
  ADD_TODO: "ADD_TODO",
  TOOGLE_TODO: "TOOGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO"
};

export const login = (username) => {
  return {
    type: types.LOGIN,
    payload: username
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    payload: filter
  };
};

export const addTodo = (text, username) => {
  return {
    type: types.ADD_TODO,
    payload: {
      text,
      username
    }
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
