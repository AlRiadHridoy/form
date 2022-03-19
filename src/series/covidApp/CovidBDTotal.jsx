import React, { useState, useEffect } from "react";

const CovidBDTotal = (props) => {
  const { setData, chng_item } = props;
  const [covidTotal, setCovidTotal] = useState(0);

  useState(
    () => {
      const covid = () => {
        if (!covidTotal) {
            fetch("https://admin.corona.rultest.com/api/statistics/total-data")
              .then((data) => data.json())
              .then((data) => {
                const [dead, infected, recoverd, tested] = Object.values(data);
                setCovidTotal({ dead, infected, recoverd, tested });
              }).then(console.log(covidTotal));
        } else {
        }
      }

      covid()
    }, []
  )

  useEffect(() => {
    console.log(covidTotal)
  }, [covidTotal])
  return (
    <div  className={chng_item}>
      <p>সর্বমোট</p>
    </div>
  );
};

export default CovidBDTotal;
