export const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

export const login = () => {
  return {
    type: types.LOGIN
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};
