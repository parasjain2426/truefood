import { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Footer } from "./components/sub-components/Footer";
import { NavHeader } from "./components/sub-components/NavHeader";
import { LogInContext } from "./contexts/LogInContext";
import { useLogin } from "./custom-hooks/useLogin";
import { useSignup } from "./custom-hooks/useSignup";
import { loginState } from "./initialStates/loginState";
import { logInReducer } from "./reducers/logInReducer";
import { ParentRouter } from "./routers/ParentRouter";
import "./styles.css";

export default function App() {
  const [state, dispatch] = useReducer(logInReducer, loginState);
  const [isLoginActive, enableLogin, disableLogin] = useLogin();
  const [isSignupActive, enableSignup, disableSignup] = useSignup();
  const loginVars = { state, dispatch, enableLogin, enableSignup };

  return (
    <div className="App">
      <LogInContext.Provider value={loginVars}>
        <NavHeader />
        <Login active={isLoginActive} setActive={disableLogin} />
        <Signup active={isSignupActive} setActive={disableSignup} />
        <Router>
          <ParentRouter />
        </Router>
      </LogInContext.Provider>
      <Footer />
    </div>
  );
}
