import React from "react";
import "../components-styles/foodStoresStyle.css";
import { ShopCard } from "./ShopCard";

export const FoodStores = ({ baseUrl }) => {
  const shopes = [
    {
      imgUrl: "https://cutt.ly/vvhkKSB",
      name: "Hira Sweets",
      variety: ["Pizza", "Burgers"],
      price: `${"\u20A8"} 200 per person`,
      rating: 5
    },
    {
      imgUrl: "https://cutt.ly/fvhcMaH",
      name: "Rohtash",
      variety: ["Rasmalai", "Halwa"],
      price: `${"\u20A8"} 100 per person`,
      rating: 2
    }
  ];
  return (
    <div className="foodStoresStyle">
      {shopes.map((shop) => (
        <ShopCard shop={shop} baseUrl={baseUrl} key={shop.imgUrl} />
      ))}
    </div>
  );
};
