import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@material-ui/lab";
import { Login } from "./Login";
import { Signup } from "./Signup";
import "./components-styles/containerStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components-styles/shopButtonStyle.css";
import { SecondaryHeader } from "./sub-components/SecondaryHeader";
import { Link, Redirect, useLocation, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { OrderRouter } from "../routers/OrderRouter";
import { toast } from "react-toastify";
import { LogInContext } from "../contexts/LogInContext";

toast.configure();
export const Shop = (props) => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isContent, setIsContent] = useState(true);
  const [state] = useContext(LogInContext);
  const { shopData } = useLocation();
  const [shop, setShop] = useState({});
  const { url } = useRouteMatch();

  useEffect(() => {
    if (shopData) {
      setShop(shopData);
    } else {
      setIsContent(false);
    }
  }, []);

  const signUpHandler = (value) => {
    setIsSignupActive(value);
  };

  const logInHandler = (value) => {
    setIsLoginActive(value);
  };

  const reviewHandler = () => {
    if (state.isLoggedIn) {
      toast.success("Added review successfully", {
        position: "bottom-center"
      });
    } else {
      setIsLoginActive(true);
    }
  };

  const bookmarkHandler = () => {
    if (state.isLoggedIn) {
      toast.success("Added bookmark successfully", {
        position: "bottom-center"
      });
    } else {
      setIsLoginActive(true);
    }
  };

  const shareHandler = () => {
    if (state.isLoggedIn) {
      toast.success("Shared successfully", {
        position: "bottom-center"
      });
    } else {
      setIsLoginActive(true);
    }
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
                src={shop.imgUrl}
                alt={shop.name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={shop.imgUrl}
                    alt={shop.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={shop.imgUrl}
                    alt={shop.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              <div
                className="col"
                style={{ padding: "0px", marginTop: "10px" }}
              >
                <img
                  src={shop.imgUrl}
                  alt={shop.name}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <h1>{shop.name}</h1>
            <Rating name="disabled" value={shop.rating} disabled />
            <h4>{shop?.variety?.join(", ")}</h4>
            <p>{shop.price}</p>
          </div>
          <div className="shopButtonStyle">
            <Button
              variant="contained"
              color="secondary"
              onClick={reviewHandler}
            >
              Add Review
            </Button>
            <Button variant="outlined">Direction</Button>
            <Button variant="outlined" onClick={bookmarkHandler}>
              BookMark
            </Button>
            <Button variant="outlined" onClick={shareHandler}>
              Share
            </Button>
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
        <div>{isContent ? null : <Redirect to="/error" />}</div>
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
