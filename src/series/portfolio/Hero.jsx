import React from "react";
import myImg from "./images/my-self.jpg";
import python from "./images/icons/python.png";
import react from "./images/icons/react.png";
import javascript from "./images/icons/javascript.png";
import tailwind from "./images/icons/tailwind.png";
import scss from "./images/icons/scss.png";
import photoshop from "./images/icons/photoshop.png";

function Hero() {
  return (
    <>
      <div
        id="hero"
        className="container contain italic border-b border-sky-600/10 pt-28 md:pt-40 pb-14"
      >
        <div className="hero_content">
          <div className="hero_top flex flex-col items-center justify-center gap-10 md:flex-row md:gap-0 ">
            <img
              data-aos="zoom-out-right"
              className="my-img w-56 rounded-full img_border"
              src={myImg}
              alt="Me"
            />
            <div className="about_me text-center lg:pl-6 lg:text-left">
              <div
                data-aos="zoom-out-left"
                className="name text-4xl md:text-6xl"
              >
                <p className="text-2xl pb-4">Hi, I'am</p>
                <h2 className="zero">Al Riad Hridoy</h2>
              </div>
              <h1 className="text-2xl md:text-4xl mt-3">Front-end Developer</h1>
              <p className=" text-slate-400 mt-3 max-w-md">
                I build creative{" "}
                <span className="text-sky-400 font-bold">Websites</span>. I love
                solving problem in programing the most. I have patience and
                interest to learn something new.
                <br />
              </p>
            </div>
          </div>
          <div className="hero_bottom flex justify-center items-center mt-16">
            <h3 className="pr-3 text-sky-400 text-3xl">Skills</h3>
            <div className="skill_icons flex flex-wrap gap-5 pl-3 border-l-2 border-pink-400">
              <a href="https://www.python.org/" target="_blank">
                <img className="skills_icon" src={python} alt="python" />
              </a>
              <a href="https://www.javascript.com/" target="_blank">
                <img className="skills_icon" src={javascript} alt="js" />
              </a>
              <a href="https://www.reactjs.org/" target="_blank">
                <img className="skills_icon" src={react} alt="react" />
              </a>
              <a href="https://www.sass-lang.com/" target="_blank">
                <img className="skills_icon" src={scss} alt="scss" />
              </a>
              <a href="https://www.tailwindcss.com/" target="_blank">
                <img className="skills_icon" src={tailwind} alt="tailwind" />
              </a>
              <a
                href="https://www.adobe.com/products/photoshop.html"
                target="_blank"
              >
                <img className="skills_icon" src={photoshop} alt="photoshop" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
