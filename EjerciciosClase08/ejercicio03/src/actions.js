export const types = {
  ADD_TODO: "ADD_TODO",
  TOOGLE_TODO: "TOOGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_FILTER: "SET_FILTER",
};

export const addTodo = (name, username) => {
  return {
    type: types.ADD_TODO,
    payload: {
      name: name,
      username: username
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


//action creator (que los tenemos en el reducer como "selectors")
export const login = (username, age) => {
  console.log("ac login");
  return {
    type: types.LOGIN,
    payload: {username: username, age: age }
  };
};
export const logout = () => {
  return {
    type: types.LOGOUT
  };
};


//action creator (que los tenemos en el reducer como "selectors")
export const setFilter = typeFilter => {
  return {
    type: types.SET_FILTER,
    payload: typeFilter
  };
};