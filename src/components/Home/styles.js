import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Background from "../../assets/Home.jpg";

export default makeStyles(() => ({
  home: {
    backgroundImage: `url(${Background})`,
    height: "calc(100vh - 64px)",
    backgroundPosition: "center",
    display: "flex",
  },
  main: { alignSelf: "center", textAlign: "center", marginLeft: "30px" },
  text: { color: "white" },
  button: {
    backgroundColor: "transparent",
    border: "solid 2px white",
    color: "white",
    padding: "12px",
    margin: "20px",
    width: "150px",
    cursor: "pointer",
  },
}));
