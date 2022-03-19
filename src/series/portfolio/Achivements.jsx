import React from "react";
import problemSolving from "./images/problem_solving.png";
import pythonCir from "./images/pythonCir.png";

function Achivements() {
  return (
    <>
      <div className="achivements container border-b border-sky-600/10 contain py-20 ">
        <div className="sections">
          <div className="achivement_top top_header">
            <h2 className="before_after">Achivements</h2>
          </div>
          <div className="achivements_bottom px-[-20]">
            <div className="achive_items flex flex-col md:flex-row lg:items-start items-center gap-16">
              <div className="item max-w-sm  relative">
                <a
                  href="https://www.hackerrank.com/certificates/802d7e976170"
                  target="_blank"
                  className="overflow-hidden relative inline-block"
                >
                  <img
                    className="hover:scale-125 transition-all w-full"
                    src={problemSolving}
                    alt="Problem Solving Certificate"
                  />
                </a>
              </div>
              <div className="item max-w-sm relative">
                <a
                  href="https://www.hackerrank.com/certificates/6c70bfda4fe6"
                  target="_blank"
                  className="overflow-hidden relative inline-block"
                >
                  <img
                    className="hover:scale-125 transition-all w-full"
                    src={pythonCir}
                    alt="Problem Solving Certificate"
                  />
                </a>
              </div>
            </div>

            <div className=" type_speed pt-16 flex justify-center items-center gap-5">
              <div
                className="relative after:content-['typeSpeed'] after:absolute hover:after:text-sky-500
                  after:transition-all"
              >
                <a
                  href="https://data.typeracer.com/pit/profile?user=alriad&ref=badge"
                  target="_blank"
                >
                  <img
                    src="https://data.typeracer.com/misc/badge?user=alriad"
                    border="0"
                    alt="TypeRacer.com scorecard for user alriad"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achivements;
