import { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LogInContext } from "./contexts/LogInContext";
import { loginState } from "./initialStates/loginState";
import { logInReducer } from "./reducers/logInReducer";
import { ParentRouter } from "./routers/ParentRouter";
import "./styles.css";

export default function App() {
  const [state, dispatch] = useReducer(logInReducer, loginState);
  return (
    <LogInContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Router>
          <ParentRouter />
        </Router>
      </div>
    </LogInContext.Provider>
  );
}
