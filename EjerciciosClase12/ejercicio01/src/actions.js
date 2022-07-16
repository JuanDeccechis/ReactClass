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
