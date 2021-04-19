import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import React from "react";
import "../components-styles/shopStyle.css";

export const ShopCard = (props) => {
  const { imgUrl, name, variety, price, rating } = props.shop;

  return (
    <div className="shopStyle">
      <Link
        to={{
          pathname: `${props.baseUrl}/${name}/order`,
          shopData: props.shop
        }}
        style={{ color: "black", textDecoration: "none" }}
      >
        <img
          style={{ height: "200px", width: "100%", borderRadius: "20px" }}
          src={imgUrl}
          alt={name}
        />
        <div style={{ textAlign: "left" }}>
          <h2>{name}</h2>
          <Rating name="disabled" value={rating} disabled />
          <p>{variety.join(", ")}</p>
          <p>{price}</p>
        </div>
      </Link>
    </div>
  );
};
