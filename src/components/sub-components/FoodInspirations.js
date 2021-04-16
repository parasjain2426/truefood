import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../components-styles/slideShowStyle.css";

export const FoodInspirations = () => {
  const slideImages = [
    "https://cutt.ly/Jvhtlpk",
    "https://cutt.ly/vvhtniT",
    "https://cutt.ly/xvhtRgh"
  ];
  return (
    <div style={{ backgroundColor: "#F5F5F5", padding: "10px" }}>
      <h2 style={{ textAlign: "left" }}>Inspiration For Your First Order</h2>
      <Slide>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <span>Momoz</span>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <span>Burgers</span>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <span>Crunchy Chicken</span>
        </div>
      </Slide>
    </div>
  );
};
