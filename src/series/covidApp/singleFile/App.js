import React, { useState, useEffect } from "react";
import "./App.css";
import CovidBD from "./CovidBD";
import covid_logo from "./covid_19.png";
// import "./index.css";

const App = () => {
  // Covid item style
  const item =
    "bg-indigo-700 min-w-[10rem] sm:w-[12rem] h-[8rem] w-full flex justify-center items-center flex-col rounded-md gap-2";
  const chng_item =
    "covid p-1 min-w-[10rem] sm:w-[12rem] h-18 w-full bg-blue-700 rounded-xl flex justify-center items-center cursor-pointer py-3";

  const [dataFetch, getDataFetch] = useState([]);
  const [temp, setTemp] = useState(0);
  const allData = [];

  const [data, setData] = useState({
    infected: "...",
    recovered: "...",
    death: "...",
    tested: "...",
  });

  const mainUrl = "https://admin.corona.rultest.com/api/statistics/";
  const textArray = [
    "last-24-hours",
    "last-week",
    "current-month",
    "total-data",
  ];

  useEffect(() => {
      textArray.map(async (ele, serial) => {
        const res = await fetch(mainUrl + ele);
        const dataJson = await res.json();
        const [infected, recovered, death, tested] = Object.values(dataJson);
        const deconsEle = { serial, infected, recovered, death, tested };
        getDataFetch((prev) => {
          return [...prev, deconsEle];
        });
        if (deconsEle.serial === temp) {
          setData(deconsEle);
        }
      });
    
  }, []);
  
  return (
    <div className=" text-white w-auto flex justify-center h-full sm:text-2xl text-[1.25rem] py-6 px-6">
      <div className="covid flex items-center flex-col text-center  gap-6">
        <div className="content_top  mt-2 gap-5 flex flex-col justify-center items-center text-center">
          <div className="top_header flex gap-3 mb-4 justify-center items-center">
            <img
              className="w-12 animate-spin"
              src={covid_logo}
              alt="covid-19"
            />
            <h1 className=" font-bold text-3xl sm:text-5xl">
              Covid-19 <span className="text-green-600">Bangladesh</span>
            </h1>
          </div>
          <h3 className=" text-2xl sm:text-4xl mb-4">
            কোভিড-১৯ বর্তমান পরিস্থিতি
          </h3>
        </div>

        <div className="covid_content flex flex-col gap-8">
          <div className="covid_info_time grid grid-cols-2 gap-7 sm:gap-10 lg:flex text-center">
            <CovidBD
              clsNam={chng_item}
              setData={setData}
              dataFetch={dataFetch}
              setTemp={setTemp}
            />
          </div>

          <div className="covid_items grid grid-cols-2 gap-7 sm:gap-10 lg:flex text-center">
            <div className={`${item} bg-primary`}>
              <h3>নমুনা পরীক্ষা</h3>
              <p className="font-semibold">{data.tested}</p>
            </div>

            <div className={item}>
              <h3>নতুন শনাক্ত</h3>
              <p className="font-semibold">{data.infected}</p>
            </div>

            <div className={`${item} bg-success`}>
              <h3>সুস্থ</h3>
              <p className="font-semibold">{data.recovered}</p>
            </div>

            <div className={`${item} bg-alert`}>
              <h3>মৃত্যু</h3>
              <p className=" font-semibold">{data.death}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// const allAPI = async (element, serial) => {
//   const response = await fetch(
//     "https://admin.corona.rultest.com/api/statistics/" + element
//   );
//   const jsonFile = await response.json();
//   const [infected, recovered, death, tested] = Object.values(jsonFile);
//   const deconsEle = { serial, infected, recovered, death, tested };
//   getDataFetch((prev) => {
//     return [...prev, deconsEle];
//   })
//   if (deconsEle.serial === temp) {
//     setData(deconsEle);
//   }
// };
// textArray.forEach((element, index) => {
//   allAPI(element, index);
// });
