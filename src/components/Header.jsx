import "../styles/component/Header.scss";
import React, { useState } from "react";
import Menu from "./Menu";
import Navigation from "./Navigation";
import Authentication from "./Authentication";

import logo from "../assets/logo.svg";
import menuIcon from "../assets/icon-menu.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  if (dimensions.width >= 768 && showMenu) {
    setShowMenu(false);
  }

  const openMenuHandler = () => {
    setShowMenu(true);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <header className="header">
      <div className="header__left">
        <a href="#" className="header__brand">
          <img src={logo} alt="snap logo" />
        </a>
        <Navigation className="header__navigation" />
      </div>
      <div className="header__right">
        <button className="header__menu" onClick={openMenuHandler}>
          <img src={menuIcon} alt="menu" />
        </button>

        <Authentication className="header__authentication" />
      </div>

      <Menu showMenu={showMenu} onClose={closeMenuHandler} />
    </header>
  );
};

export default Header;
