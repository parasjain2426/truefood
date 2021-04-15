import { LOGIN, LOGOUT } from "./actionVars";

export const logInUser = () => {
  return {
    type: LOGIN
  };
};
export const logOutUser = () => {
  return {
    type: LOGOUT
  };
};
