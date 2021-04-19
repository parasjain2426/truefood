import React, { Fragment, useContext, useState } from "react";
import { IoMdCreate } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { Button } from "@material-ui/core";
import { SearchBox } from "./SearchBox";
import { Login } from "../Login";
import { Signup } from "../Signup";
import "../components-styles/headerStyle.css";
import { LogInContext } from "../../contexts/LogInContext";
import { logOutUser } from "../../actions/actionCreator";

export const TrueHeader = (props) => {
  // console.log(props);
  // console.log("from header");
  const [state, dispatch] = useContext(LogInContext);
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [serveDestination, setServeDestination] = useState("India");

  const signUpHandler = (value) => {
    setIsSignupActive(value);
  };

  const logInHandler = (value) => {
    setIsLoginActive(value);
  };

  return (
    <Fragment>
      <header className="headerStyle">
        <nav
          style={{
            float: "right",
            display: state.isLoggedIn ? "none" : "block"
          }}
        >
          <Button
            color="primary"
            variant="contained"
            style={{ margin: "10px 20px" }}
            onClick={() => logInHandler(true)}
          >
            <FiLogIn style={{ marginRight: "5px" }} />
            Login
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ margin: "10px 20px 10px 10px" }}
            onClick={() => signUpHandler(true)}
          >
            <IoMdCreate style={{ marginRight: "5px" }} />
            Signup
          </Button>
        </nav>
        <nav
          style={{
            float: "right",
            display: state.isLoggedIn ? "block" : "none"
          }}
        >
          <Button
            color="primary"
            variant="contained"
            style={{ margin: "10px 20px" }}
            onClick={() => dispatch(logOutUser())}
          >
            Logout
          </Button>
        </nav>
        <main style={{ clear: "both", textAlign: "center", color: "white" }}>
          <h1
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "4em",
              margin: "0px"
            }}
          >
            <em>true</em>FOOD
          </h1>
          <h2>Discover the best food & drinks in {serveDestination}</h2>
          <SearchBox setServeDestination={setServeDestination} />
        </main>
      </header>
      <Login active={isLoginActive} setActive={logInHandler} />
      <Signup active={isSignupActive} setActive={signUpHandler} />
    </Fragment>
  );
};
