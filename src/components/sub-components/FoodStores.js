import React from "react";
import { Shop } from "./Shop";
import "../components-styles/foodStoresStyle.css";

export const FoodStores = () => {
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
        <Shop shop={shop} key={shop.imgUrl} />
      ))}
    </div>
  );
};
