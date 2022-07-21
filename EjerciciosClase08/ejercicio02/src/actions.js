
//action types (que los tenemos en el reducer)
export const types = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
  };
  
  //action creator (que los tenemos en el reducer como "selectors")
  export const login = (username, age) => {
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