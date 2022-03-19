import React from "react";
import ReactDOM from "react-dom";

const hour = new Date().getHours();

const arr = [
  ["Good Morning", "green"],
  ["Good Afternoon", "orange"],
  ["Good Night", "Black"],
];
const n = hour > 19 ? 2 : hour > 11 ? 1 : 0;

const localTime = new Date().toLocaleTimeString();

const span = {
  color: arr[n][1],
  padding: "2rem 1rem 2rem 1rem",
  backgroundColor: "purple",
  borderRadius: "20px",
};

const hTree = {
  minHeight: 100 + "%",
  minWidth: 100 + "%",
  backgroundColor: "crimson",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

ReactDOM.render(
  <h3 style={hTree}>
    Hello sir, <span style={span}>{arr[n][0]}</span> {localTime}
  </h3>,
  document.getElementById("root")
);
