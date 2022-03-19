import React, { useState, useEffect } from "react";

export const CovidBD30 = (props) => {
  const covid30 = () => {
    props.chng("https://admin.corona.rultest.com/api/statistics/current-month");
  };
  return (
    <div
      onClick={covid30}
      className="covid_24 p-1 w-[8rem] h-8 bg-blue-700 rounded-xl flex justify-center items-center text-[0.6rem] cursor-pointer"
    >
      <p>গত ৩০ দিন</p>
    </div>
  );
};

export default CovidBD30;
