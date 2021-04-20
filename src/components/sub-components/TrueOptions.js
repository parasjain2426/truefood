import React, { useState } from "react";
import "../components-styles/options.css";
import { Link } from "react-router-dom";
import "../components-styles/optionContainerStyle.css";
import { useSpring, animated } from "react-spring";

export const TrueOptions = () => {
  const [toggle, setToggle] = useState({ online: false, outMeal: false });
  const onlineMealScale = useSpring({
    transform: toggle.online ? "scale(1.05)" : "scale(1)"
  });
  const outMealScale = useSpring({
    transform: toggle.outMeal ? "scale(1.05)" : "scale(1)"
  });
  return (
    <div className="optionContainerStyle">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/orderOnline"
      >
        <animated.div
          className="option orderOnline"
          style={onlineMealScale}
          onMouseEnter={() => setToggle({ online: true })}
          onMouseLeave={() => setToggle({ online: false })}
        >
          <div className="optionHeading">
            Order Food Online
            <p style={{ fontSize: "15px", margin: "2px" }}>
              Order food at your doorstep
            </p>
          </div>
        </animated.div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/outMeal">
        <animated.div
          className="option outMeal"
          style={outMealScale}
          onMouseEnter={() => setToggle({ outMeal: true })}
          onMouseLeave={() => setToggle({ outMeal: false })}
        >
          <div className="optionHeading">
            Go out for a meal
            <p style={{ fontSize: "15px", margin: "2px" }}>
              View your favourite venues
            </p>
          </div>
        </animated.div>
      </Link>
    </div>
  );
};
