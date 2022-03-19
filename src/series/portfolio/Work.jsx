import React from "react";

import portfolio1 from "./images/portfolio/portfolio-1.jpg";
import portfolio2 from "./images/portfolio/portfolio-2.jpg";


function Work() {
  return (
    <div
      id="work"
      className="container contain border-b border-sky-600/10 py-20"
    >
      <div className="works sections">
        <div className="work_header top_header">
          <h2 className="before_after">Some of my works</h2>
        </div>

        <div className="projects w-full">
          <div className="portfolio-items flex flex-col lg:items-start items-center gap-16">
            <figure className="item specta work_item">
              <div data-aos="fade-right" className="work_img">
                <img src={portfolio1} alt="" />
              </div>
              <figcaption data-aos="fade-left" className="flex flex-col gap-5">
                <p className="max-w-sm">
                  This is my first resposive website. Back then I had little
                  knowledge about Resposive Design :D
                </p>
                <div className="work_links flex gap-5 lg:gap-10">
                  <a
                    className="work_visit_btn"
                    href="https://alriadhridoy.github.io/specta/"
                    target="_blank"
                  >
                    <i className="fa fa-external-link text-2xl"></i>
                    <span>visit page</span>
                  </a>
                  <a
                    className="work_github_btn"
                    href="https://github.com/AlRiadHridoy/specta"
                    target="_blank"
                  >
                    <i className="fab fa-github text-2xl"></i>
                    <span>github</span>
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className="item itsoft work_item">
              <div data-aos="fade-right" className="work_img">
                <img src={portfolio2} alt="" />
              </div>
              <figcaption data-aos="fade-left" className="flex flex-col gap-5">
                <p className="max-w-sm">
                  Here is one of my best Responsive Design.
                </p>
                <div className="work_links flex gap-5 lg:gap-10">
                  <a
                    className="work_visit_btn"
                    href="https://alriadhridoy.github.io/itsoft"
                    target="_blank"
                  >
                    <i className="fa fa-external-link text-2xl"></i>
                    <span>visit page</span>
                  </a>
                  <a
                    className="work_github_btn"
                    href="https://github.com/AlRiadHridoy/itsoft"
                    target="_blank"
                  >
                    <i className="fab fa-github text-2xl"></i>
                    <span>github</span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
