import { createStore } from "redux";
import { logInReducer } from "../reducers/logInReducer";

const store = createStore(logInReducer);

export default store;
