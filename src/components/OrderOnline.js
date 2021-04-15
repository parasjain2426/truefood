import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import "./components-styles/containerStyle.css";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { SearchBox } from "./sub-components/SearchBox";

export const OrderOnline = (props) => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const { path } = useRouteMatch();
  const [option, setOption] = useState("");

  const signUpHandler = (value) => {
    setIsSignupActive(value);
  };

  const logInHandler = (value) => {
    setIsLoginActive(value);
  };
  useEffect(() => {
    optionHandler();
  }, []);
  const optionHandler = () => {
    var tempPath = path.slice(path.search(/[A-Z]/));
    if (tempPath === "Meal") {
      setOption("Places to have wonderful meal");
    } else {
      setOption("Order delicious food online");
    }
  };
  return (
    <div className="containerStyle">
      <div style={boxStyle}>
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
        <div style={{ float: "right", marginRight: "20px" }}>
          <Button onClick={() => logInHandler(true)}>Login</Button>
          <Button onClick={() => signUpHandler(true)}>Signup</Button>
        </div>
        <div
          style={{
            width: "480px",
            border: "1px solid black",
            float: "left",
            marginLeft: "50px"
          }}
        >
          <SearchBox />
        </div>
        <div style={{ clear: "both", margin: "150px" }}>
          <h2>{option}</h2>
        </div>
        <Login active={isLoginActive} setActive={logInHandler} />
        <Signup active={isSignupActive} setActive={signUpHandler} />
      </div>
    </div>
  );
};
const boxStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  margin: "0px auto",
  padding: "5px",
  top: "50%"
};
