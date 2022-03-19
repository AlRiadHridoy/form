import React, { useState, useEffect } from "react";
import covidImg from "./images/covid/covid_19.png";
import myIcon from "./images/my-icon.png";
import navClose from "./images/nav_close.svg";

import { Link } from "react-scroll";

function Header() {
  const [navtoggle, setNavtoggle] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const hamburger = () => {
    setNavtoggle(navtoggle === 0 ? 1 : 0);
  };

  const scrolled = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", scrolled);

  return (
    <header className="relative">
      <div
        className={`fixed md:px-28 px-10 container mx-auto max-w-full flex justify-between text-white z-20 transition-all backdrop-blur-xl ${
          isScrolled
            ? "bg-all/60 py-3 md:py-3 nav_shadow shadow-2xl"
            : "md:py-10 py-5"
        }`}
      >
        <div className="header_left">
          <div className="my_img w-12">
            <a href="https://www.facebook.com/alriadhridoy/" target="_blank">
              <img src={myIcon} alt="Hridoy" />
            </a>
          </div>
        </div>

        <div className="header_middle">
          <div className="covid_img">
            <a href="https://alriadhridoycovidbd.netlify.app/" target="_blank">
              <img className="w-12 animate-spin" src={covidImg} alt="" />
            </a>
          </div>
        </div>

        <div className="header_right md:flex">
          <div className="nav h-full flex items-center">
            <div
              className="hamburger grid items-center gap-1"
              onClick={hamburger}
            >
              <i class="fas fa-bars text-pink-400 text-3xl md:hidden cursor-pointer"></i>
            </div>

            <ul
              className={`nav_links transition_4 z-50 ${
                navtoggle ? "" : "opacity-0 invisible md:visible"
              }`}
            >
              <li className="close_nav pt-5 pr-10 flex justify-end md:hidden">
                <i
                  className="fa fa-close text-pink-400 text-3xl cursor-pointer"
                  onClick={hamburger}
                ></i>
              </li>

              <li className="navlink">
                <Link
                  onClick={hamburger}
                  className="cursor-pointer"
                  to="hero"
                  smooth={true}
                  duration={400}
                >
                  Home
                </Link>
              </li>
              <li className="navlink">
                <Link
                  onClick={hamburger}
                  className="cursor-pointer"
                  to="work"
                  smooth={true}
                  duration={400}
                >
                  Work
                </Link>
              </li>
              <li className="navlink">
                <Link
                  onClick={hamburger}
                  className="cursor-pointer"
                  to="achivements"
                  smooth={true}
                  duration={400}
                >
                  Achivements
                </Link>
              </li>
              <li className="navlink">
                <Link
                  onClick={hamburger}
                  className="cursor-pointer"
                  to="contact"
                  smooth={true}
                  duration={400}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`fixed md:static h-screen w-screen md:h-auto md:w-auto md:bg-transparent transition_4 z-10  bg-black/50  ${
          navtoggle ? "left-0 bottom-0" : " opacity-0 invisible"
        }`}
        onClick={hamburger}
      ></div>
    </header>
  );
}

export default Header;
