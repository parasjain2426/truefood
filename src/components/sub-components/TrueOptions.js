import React from "react";
import "../components-styles/options.css";
import { Link } from "react-router-dom";
import "../components-styles/optionContainerStyle.css";

export const TrueOptions = () => {
  return (
    <div className="optionContainerStyle">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/orderOnline"
      >
        <div className="option" style={orderOnlineStyle}>
          <div className="optionHeading">
            Order Food Online
            <p style={{ fontSize: "15px", margin: "2px" }}>
              Order food at your doorstep
            </p>
          </div>
        </div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/outMeal">
        <div className="option" style={outingStyle}>
          <div className="optionHeading">
            Go out for a meal
            <p style={{ fontSize: "15px", margin: "2px" }}>
              View your favourite venues
            </p>
          </div>
        </div>
      </Link>
    </div>
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
