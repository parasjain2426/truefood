import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import "./components-styles/containerStyle.css";
import { FoodInspirations } from "./sub-components/FoodInspirations";
import { FoodStores } from "./sub-components/FoodStores";
import { SecondaryHeader } from "./sub-components/SecondaryHeader";

export const OrderOnline = (props) => {
  const { url, path } = useRouteMatch();
  const [option, setOption] = useState("");

  useEffect(() => {
    optionHandler();
  }, []);
  const optionHandler = () => {
    var tempPath = path.slice(path.search(/[A-Z]/));
    if (tempPath === "Meal") {
      setOption("Places to have wonderful meal");
    } else {
      setOption("Order delicious food online");
    }
  };
  return (
    <div>
      <div style={boxStyle}>
        <SecondaryHeader />
        <FoodInspirations />
        <h2>{option}</h2>
        <FoodStores baseUrl={url} />
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
