import React from "react";
import "../components-styles/options.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { OrderRouter } from "../../routers/OrderRouter";
import "../components-styles/optionContainerStyle.css";

export const TrueOptions = () => {
  return (
    <Router>
      <div className="optionContainerStyle">
        <Link style={{ textDecoration: "none" }} to="/orderOnline">
          <div className="option" style={orderOnlineStyle}>
            <div style={optionHeading}>
              Order Food Online
              <p style={{ fontSize: "15px", margin: "2px" }}>
                Order food at your doorstep
              </p>
            </div>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/outMeal">
          <div className="option" style={outingStyle}>
            <div style={optionHeading}>
              Go out for a meal
              <p style={{ fontSize: "15px", margin: "2px" }}>
                View your favourite venues
              </p>
            </div>
          </div>
        </Link>
      </div>
      <OrderRouter />
    </Router>
  );
};
const orderOnlineStyle = {
  background: 'url("https://cutt.ly/Nvao8eR")',
  backgroundPosition: "center",
  backgroundSize: "cover"
};
const outingStyle = {
  background: 'url("https://cutt.ly/qvapWLm")',
  backgroundPosition: "center",
  backgroundSize: "cover"
};
const optionHeading = {
  width: "100%",
  height: "80px",
  backgroundColor: "rgba(255,255,255,0.8)",
  fontSize: "1.5em",
  padding: "10px"
};
