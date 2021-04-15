import React from "react";
import { containerStyle } from "./components-styles/containerStyle";
import { SearchBox } from "./sub-components/SearchBox";

export const OrderOnline = () => {
  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1
          style={{
            fontFamily: "Trebuchet MS",
            fontSize: "2em",
            margin: "0px",
            textAlign: "left",
            width: "100%"
          }}
        >
          <em>true</em>FOOD
          <p style={{ fontSize: "0.5em" }}>Deliever best at your doorsteps!</p>
        </h1>
        <div
          style={{ width: "480px", border: "1px solid black", float: "right" }}
        >
          <SearchBox />
        </div>
      </div>
    </div>
  );
};
const boxStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  margin: "0px auto",
  padding: "20px",
  top: "50%"
};
