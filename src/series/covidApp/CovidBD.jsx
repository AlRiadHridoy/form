import React, { useState, useEffect } from "react";

const CovidBD = (props) => {
  const [backgrnd, setbackgrnd] = useState(0);
  const { setData, dataFetch, setTemp } = props;

  const active = (index) => {
    setbackgrnd(index);
    setTemp(index);
    for (const item of dataFetch) {
      if (item.serial === index) {
        setData(item);
      }
    }
  };

  return (
    <>
      <div
        onClick={() => {
          active(0);
        }}
        className={`${props.clsNam} ${backgrnd === 0 ? "active" : ""}`}
      >
        <p>গত ২৪ ঘন্টা</p>
      </div>
      <div
        onClick={() => {
          active(1);
        }}
        className={`${props.clsNam} ${backgrnd === 1 ? "active" : ""}`}
      >
        <p>গত ৭ দিন</p>
      </div>
      <div
        onClick={() => {
          active(2);
        }}
        className={`${props.clsNam} ${backgrnd === 2 ? "active" : ""}`}
      >
        <p>গত ৩০ দিন</p>
      </div>
      <div
        onClick={() => {
          active(3);
        }}
        className={`${props.clsNam} ${backgrnd === 3 ? "active" : ""}`}
      >
        <p>সর্বমোট</p>
      </div>
    </>
  );
};

export default CovidBD;
