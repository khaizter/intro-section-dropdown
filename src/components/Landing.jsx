import "../styles/component/Landing.scss";
import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <picture className="landing__image">
        <source
          srcSet="./images/image-hero-desktop.png"
          media="(min-width: 768px)"
        />
        <img src="./images/image-hero-mobile.png" alt="laptop-guy" />
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
              <img src="./images/client-databiz.svg" alt="databiz brand" />
            </a>
          </li>
          <li>
            <a href="#" className="landing__client-brand">
              <img
                src="./images/client-audiophile.svg"
                alt="audiophile brand"
              />
            </a>
          </li>
          <li>
            <a href="#" className="landing__client-brand">
              <img src="./images/client-meet.svg" alt="meet brand" />
            </a>
          </li>
          <li>
            <a href="#" className="landing__client-brand">
              <img src="./images/client-maker.svg" alt="maker brand" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
