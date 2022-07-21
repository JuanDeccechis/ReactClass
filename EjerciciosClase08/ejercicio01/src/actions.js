
//action types (que los tenemos en el reducer)
export const types = {
  ADD_TODO: 'ADD_TODO',
  TOOGLE_TODO: 'TOOGLE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
}

//action creator (que los tenemos en el reducer como "selectors")
export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    payload: text
  };
};
export const toggleTodo = (id) => {
  return {
    type: types.TOOGLE_TODO,
    payload: id
  };
};
export const removeTodo = (id) => {
  return {
    type: types.REMOVE_TODO,
    payload: id
  };
};