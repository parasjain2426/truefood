import React, { Fragment, useState } from "react";
import { SearchBox } from "./SearchBox";
import "../components-styles/headerStyle.css";

export const TrueHeader = (props) => {
  const [serveDestination, setServeDestination] = useState("India");

  return (
    <Fragment>
      <header className="headerStyle">
        <main style={{ clear: "both", textAlign: "center", color: "white" }}>
          <h1
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "4em",
              margin: "0px"
            }}
          >
            <em>true</em>FOOD
          </h1>
          <h2>Discover the best food & drinks in {serveDestination}</h2>
          <SearchBox setServeDestination={setServeDestination} />
        </main>
      </header>
    </Fragment>
  );
};
