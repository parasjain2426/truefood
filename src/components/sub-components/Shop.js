import { Rating } from "@material-ui/lab";
import React from "react";
import "../components-styles/shopStyle.css";

export const Shop = (props) => {
  const { imgUrl, name, variety, price, rating } = props.shop;
  return (
    <div className="shopStyle">
      <img
        src={imgUrl}
        alt={name}
        style={{ height: "200px", width: "100%", borderRadius: "20px" }}
      />
      <div style={{ textAlign: "left" }}>
        <h2>{name}</h2>
        <Rating name="disabled" value={rating} disabled />
        <p>{variety.join(", ")}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
