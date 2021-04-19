import { BUY, LOGIN, LOGOUT, MODIFYQUANTITY, PROCESS } from "./actionVars";

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
export const modifyQuantity = (id, count) => {
  return {
    type: MODIFYQUANTITY,
    id,
    count
  };
};
export const processOrder = (id, value) => {
  return {
    type: PROCESS,
    id,
    value
  };
};
export const buyOrder = (id) => {
  return {
    type: BUY,
    id
  };
};
