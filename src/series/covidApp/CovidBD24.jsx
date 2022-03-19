import React, { useState, useEffect } from "react";

export const CovidBD = (props) => {
  const covid24 = () => {
    props.chng("https://admin.corona.rultest.com/api/statistics/last-24-hours");
  };

  return (
    <div
      onClick={covid24}
      className="covid_24 p-1 w-[8rem] h-8 bg-blue-700 rounded-xl flex justify-center items-center text-[0.6rem] cursor-pointer"
    >
      <p>গত ২৪ ঘন্টা</p>
    </div>
  );
};

export default CovidBD;
