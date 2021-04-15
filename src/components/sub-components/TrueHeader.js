import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ChildrenRouter } from "../../routers/ChildrenRouter";
import { SearchBox } from "./SearchBox";

export const TrueHeader = (props) => {
  // console.log(props);
  // console.log("from header");

  const [serveDestination, setServeDestination] = useState("India");

  return (
    <Router>
      <header
        style={{
          width: "100%",
          height: "45%",
          minHeight: "250px",
          background: `linear-gradient(
          rgba(0, 0, 0, 0.52),
          rgba(0, 0, 0, 0.5)
      ),url("https://cutt.ly/AviDdUf")`,
          backgroundPosition: "center",
          margin: "0px",
          padding: "10px",
          position: "absolute",
          left: "0px",
          top: "0px"
        }}
      >
        <nav style={{ float: "right" }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="contained"
              style={{ margin: "10px 20px" }}
            >
              <FiLogIn style={{ marginRight: "5px" }} />
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="contained"
              style={{ margin: "10px 20px 10px 10px" }}
            >
              <IoMdCreate style={{ marginRight: "5px" }} />
              Signup
            </Button>
          </Link>
        </nav>
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
      <ChildrenRouter />
    </Router>
  );
};
