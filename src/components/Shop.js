import React, { useContext, useEffect, useReducer, useState } from "react";
import { Rating } from "@material-ui/lab";
import { Login } from "./Login";
import { Signup } from "./Signup";
import "./components-styles/containerStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components-styles/shopButtonStyle.css";
import "../components/components-styles/orderChildStyle.css";
import { SecondaryHeader } from "./sub-components/SecondaryHeader";
import {
  Link,
  NavLink,
  Redirect,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import { Button } from "@material-ui/core";
import { OrderRouter } from "../routers/OrderRouter";
import { toast } from "react-toastify";
import { OrderContext } from "../contexts/OrderContext";
import { LogInContext } from "../contexts/LogInContext";
import { orderReducer } from "../reducers/orderReducer";
import { initialOrders } from "../initialStates/initialOrders";
import { modifyQuantity, processOrder } from "../actions/actionCreator";
import { useSpring, animated } from "react-spring";

toast.configure();
export const Shop = (props) => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isContent, setIsContent] = useState(true);
  const [ordersState, dispatchOrders] = useReducer(orderReducer, initialOrders);
  const { orders } = ordersState;
  const [showProcessedOrders, setShowProcessedOrders] = useState(false);
  const [state] = useContext(LogInContext);
  const { shopData } = useLocation();
  const [shop, setShop] = useState({});
  const { url } = useRouteMatch();
  const yourOrderStyle = useSpring({
    width: "100%",
    display: showProcessedOrders ? "block" : "none",
    backgroundColor: "#F5F5F5",
    height: "40%",
    overflow: "auto",
    padding: "10px",
    opacity: showProcessedOrders ? 1 : 0
  });
  useEffect(() => {
    if (shopData) {
      setShop(shopData);
    } else {
      setIsContent(false);
    }
  }, []);

  const processedOrderHandler = () => {
    var processed = orders.filter((order) => order.isprocessed === true);
    return processed;
  };
  const subTotalHandler = () => {
    var sum = 0;
    var subTotal = processedOrders.map((order) => {
      return Number(order.price) * order.quantity;
    });
    sum = subTotal.length > 0 ? subTotal.reduce(finalPrice) : 0;
    return sum;
  };

  const finalPrice = (total, num) => {
    return total + num;
  };
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

  const showProcessedOrderHandler = () => {
    setShowProcessedOrders(!showProcessedOrders);
  };

  const buyOrderHandler = () => {
    if (state.isLoggedIn) {
      processedOrders.map((order) => {
        dispatchOrders(processOrder(order.id, false));
        dispatchOrders(modifyQuantity(order.id, 1));
        return true;
      });
      setShowProcessedOrders(false);
      toast.success("Orders booked successfully", {
        position: "top-center"
      });
    } else {
      setIsLoginActive(true);
    }
  };

  var processedOrders = processedOrderHandler();
  var subTotal = subTotalHandler();
  return (
    <OrderContext.Provider value={[ordersState, dispatchOrders]}>
      <div className="containerStyle">
        <div style={boxStyle}>
          <SecondaryHeader
            signUpHandler={signUpHandler}
            logInHandler={logInHandler}
          />
          <div
            style={{ width: "90%", margin: "0px auto" }}
            className="container"
          >
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
              <Rating
                name="disabled"
                value={shop?.rating ? shop.rating : 0}
                disabled
              />
              <h4>{shop?.variety?.join(", ")}</h4>
              <p>{shop?.price}</p>
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
              <NavLink
                to={`${url}/overview`}
                className="link"
                activeClassName="main-link-nav"
              >
                Overview
              </NavLink>
              <NavLink
                to={`${url}/order`}
                className="link"
                activeClassName="main-link-nav"
              >
                Order Online
              </NavLink>
              <NavLink
                to={`${url}/reviews`}
                className="link"
                activeClassName="main-link-nav"
              >
                Reviews
              </NavLink>
              <NavLink
                to={`${url}/menu`}
                className="link"
                activeClassName="main-link-nav"
              >
                Menu
              </NavLink>
              <NavLink
                to={`${url}/photos`}
                className="link"
                activeClassName="main-link-nav"
              >
                Photos
              </NavLink>
            </div>
            <OrderRouter />
          </div>
          <Login active={isLoginActive} setActive={logInHandler} />
          <Signup active={isSignupActive} setActive={signUpHandler} />
          <div>{isContent ? null : <Redirect to="/error" />}</div>
          <animated.div style={yourOrderStyle}>
            <h3>Your Orders</h3>
            <ul style={{ listStyle: "none", margin: "10px" }}>
              {processedOrders.map((processedOrder) => (
                <li key={processedOrder.id}>
                  <div style={{ float: "left" }}>{processedOrder.name}</div>
                  <div style={{ float: "right", padding: "10px" }}>
                    <div>
                      <b>Rs.{processedOrder.price}</b>
                    </div>
                    <div>
                      Quantity: <b>{processedOrder.quantity}</b>
                    </div>
                  </div>

                  <div style={{ width: "95%", clear: "both", margin: "10px" }}>
                    <hr />
                  </div>
                </li>
              ))}
            </ul>
          </animated.div>
          <div
            className="orderChildStyle"
            style={{
              display: processedOrders.length > 0 ? "block" : "none"
            }}
          >
            <div
              style={{
                float: "left",
                margin: "5px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "25%"
              }}
            >
              <Button variant="outlined" onClick={showProcessedOrderHandler}>
                ^
              </Button>
              <div style={{ margin: "10px 5px" }}>
                Orders: <b>{processedOrders.length}</b>
              </div>
            </div>
            <div
              style={{
                float: "right",
                margin: "5px",
                display: "flex",
                justifyContent: "space-evenly",
                width: "30%"
              }}
            >
              <div style={{ margin: "10px" }}>
                Sub-Total: <b>Rs.{subTotal}</b>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={buyOrderHandler}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </OrderContext.Provider>
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
