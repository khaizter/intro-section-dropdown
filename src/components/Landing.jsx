import "../styles/component/Landing.scss";
import React from "react";

import heroDesktop from "../assets/image-hero-desktop.png";
import heroMobile from "../assets/image-hero-mobile.png";
import clientDatabiz from "../assets/client-databiz.svg";
import clientAudiophile from "../assets/client-audiophile.svg";
import clientMeet from "../assets/client-meet.svg";
import clientMaker from "../assets/client-maker.svg";

const Landing = () => {
  return (
    <main className="landing">
      <picture className="landing__image">
        <source srcSet={heroDesktop} media="(min-width: 768px)" />
        <img src={heroMobile} alt="laptop-guy" />
      </picture>
      <div className="landing__content">
        <h1 className="landing__title">Make remote work</h1>
        <p className="landing__body">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="landing__cta">Learn More</button>
        <ul className="landing__clients">
          <li>
            <a href="#" className="landing__client-brand">
              <img src={clientDatabiz} alt="databiz brand" />
            </a>
          </li>
          <li>
            <a href="#" className="landing__client-brand">
              <img src={clientAudiophile} alt="audiophile brand" />
            </a>
          </li>
          <li>
            <a href="#" className="landing__client-brand">
              <img src={clientMeet} alt="meet brand" />
            </a>
          </li>
          <li>
            <a href="#" className="landing__client-brand">
              <img src={clientMaker} alt="maker brand" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Landing;
