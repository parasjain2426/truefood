import { LOGOUT } from "../actions/actionVars";
import { LOGIN } from "../actions/actionVars";
import { loginState } from "../initialStates/loginState";

export const logInReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
};
