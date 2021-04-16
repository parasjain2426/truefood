import React, { Fragment, useContext } from "react";
import { SearchBox } from "../sub-components/SearchBox";
import { Button } from "@material-ui/core";
import { logOutUser } from "../../actions/actionCreator";
import { LogInContext } from "../../contexts/LogInContext";

export const SecondaryHeader = ({ logInHandler, signUpHandler }) => {
  const [state, dispatch] = useContext(LogInContext);
  return (
    <Fragment>
      <h1
        style={{
          fontFamily: "Trebuchet MS",
          fontSize: "2em",
          margin: "0px",
          float: "left"
        }}
      >
        <em>true</em>FOOD
        <p style={{ fontSize: "0.5em" }}>Deliever best at your doorsteps!</p>
      </h1>
      <nav
        style={{
          float: "right",
          marginRight: "20px",
          display: state.isLoggedIn ? "none" : "block"
        }}
      >
        <Button onClick={() => logInHandler(true)}>Login</Button>
        <Button onClick={() => signUpHandler(true)}>Signup</Button>
      </nav>
      <nav
        style={{
          float: "right",
          marginRight: "20px",
          display: state.isLoggedIn ? "block" : "none"
        }}
      >
        <Button onClick={() => dispatch(logOutUser())}>Logout</Button>
      </nav>
      <div
        style={{
          float: "left",
          margin: "10px 50px"
        }}
      >
        <SearchBox />
      </div>
      <div style={{ clear: "both", marginTop: "100px" }}>
        <hr />
      </div>
    </Fragment>
  );
};
