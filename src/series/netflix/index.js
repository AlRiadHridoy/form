import React from "react";
import ReactDOM from "react-dom";
import "./netflix.css";
import Card from "./Netflix";
import SerInfo from "./Datajson";

ReactDOM.render(
  <>
    <div className="cards">
      {SerInfo.map((value) => {
        return <Card sname={value.sname} simg={value.simg} link={value.link} />;
      })}
    </div>
  </>,
  document.getElementById("root")
);
