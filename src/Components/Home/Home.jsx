import React from "react";
import "./Home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import SocialInfo from "../SocialInfo.json";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {
                SocialInfo.work.map((det)=>(
                    <a href={det.url} className="home__social-icon" target="_blank">
                <i className={`uil uil-${det.icon}`}></i>
            </a>

                ))
            }
        </div>
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
