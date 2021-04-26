import React, { Fragment } from "react";
import { SearchBox } from "../sub-components/SearchBox";

export const SecondaryHeader = () => {
  return (
    <Fragment>
      <h1 style={secondaryHeaderStyle}>
        <em>true</em>FOOD
        <p style={{ fontSize: "0.5em" }}>Deliever best at your doorsteps!</p>
      </h1>
      <div
        style={{
          float: "left",
          margin: "10px 50px"
        }}
      >
        <SearchBox />
      </div>
      <div style={{ clear: "both", marginTop: "100px" }}>
        <hr />
      </div>
    </Fragment>
  );
};

const secondaryHeaderStyle = {
  fontFamily: "Trebuchet MS",
  fontSize: "2em",
  margin: "0px",
  float: "left"
};
