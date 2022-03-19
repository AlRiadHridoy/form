import React, { useState, useEffect } from "react";

export const CovidBD7 = (props) => {
  const covid7 = () => {
    props.chng("https://admin.corona.rultest.com/api/statistics/last-week");
  };
  return (
    <div
      onClick={covid7}
      className="covid_24 p-1 w-[8rem] h-8 bg-blue-700 rounded-xl flex justify-center items-center text-[0.6rem] cursor-pointer"
    >
      <p>গত ৭ দিন</p>
    </div>
  );
};

export default CovidBD7;
