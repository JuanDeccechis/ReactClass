export const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_ASYNC: "INCREMENT_ASYNC"
};

export const increment = () => {
  return {
    type: types.INCREMENT
  };
};
export const decrement = () => {
  return {
    type: types.DECREMENT
  };
};
export const incrementAsync = () => {
  console.log("inc async");
  return {
    type: types.INCREMENT_ASYNC
  }
}
