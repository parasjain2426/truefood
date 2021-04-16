import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import "./components-styles/containerStyle.css";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { FoodInspirations } from "./sub-components/FoodInspirations";
import { FoodStores } from "./sub-components/FoodStores";
import { Footer } from "./sub-components/Footer";
import { SecondaryHeader } from "./sub-components/SecondaryHeader";

export const OrderOnline = (props) => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const { url, path } = useRouteMatch();
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
        <SecondaryHeader
          signUpHandler={signUpHandler}
          logInHandler={logInHandler}
        />
        <FoodInspirations />
        <h2>{option}</h2>
        <FoodStores baseUrl={url} />
        <Footer />
        <Login active={isLoginActive} setActive={logInHandler} />
        <Signup active={isSignupActive} setActive={signUpHandler} />
      </div>
    </div>
  );
};
const boxStyle = {
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  backgroundColor: "white",
  padding: "0px",
  display: "absolute",
  overflow: "auto"
};
