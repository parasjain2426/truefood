import React, { useEffect, useState } from "react";
import { Rating } from "@material-ui/lab";
import { Login } from "./Login";
import { Signup } from "./Signup";
import "./components-styles/containerStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components-styles/shopButtonStyle.css";
import { SecondaryHeader } from "./sub-components/SecondaryHeader";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { OrderRouter } from "../routers/OrderRouter";

export const Shop = (props) => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const { shopData } = useLocation();
  const [shop, setShop] = useState(shopData);
  const { url } = useRouteMatch();
  const { imgUrl, name, variety, price, rating } = shop;

  useEffect(() => {
    console.log("Hii");
    if (shopData) {
      localStorage.setItem("shop", shopData);
    } else {
      setShop(localStorage.getItem("shop"));
    }
  }, []);

  const signUpHandler = (value) => {
    setIsSignupActive(value);
  };

  const logInHandler = (value) => {
    setIsLoginActive(value);
  };
  return (
    <div className="containerStyle">
      <div style={boxStyle}>
        <SecondaryHeader
          signUpHandler={signUpHandler}
          logInHandler={logInHandler}
        />
        <div style={{ width: "90%", margin: "0px auto" }} className="container">
          <div className="row">
            <div className="col-8">
              <img
                src={imgUrl}
                alt={name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={imgUrl}
                    alt={name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={imgUrl}
                    alt={name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              <div
                className="col"
                style={{ padding: "0px", marginTop: "10px" }}
              >
                <img
                  src={imgUrl}
                  alt={name}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <h1>{name}</h1>
            <Rating name="disabled" value={rating} disabled />
            <h4>{variety.join(", ")}</h4>
            <p>{price}</p>
          </div>
          <div className="shopButtonStyle">
            <Button variant="contained" color="secondary">
              Add Review
            </Button>
            <Button variant="outlined">Direction</Button>
            <Button variant="outlined">BookMark</Button>
            <Button variant="outlined">Share</Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "10px 0px",
              height: "50px",
              alignItems: "flex-end"
            }}
          >
            <Link to={`${url}/overview`}>Overview</Link>
            <Link to={`${url}/order`}>Order Online</Link>
            <Link to={`${url}/reviews`}>Reviews</Link>
            <Link to={`${url}/menu`}>Menu</Link>
            <Link to={`${url}/photos`}>Photos</Link>
          </div>
          <OrderRouter />
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
  top: "0",
  left: "0",
  backgroundColor: "white",
  padding: "0px",
  display: "absolute",
  overflow: "auto"
};
