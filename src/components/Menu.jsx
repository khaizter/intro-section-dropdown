import "../styles/component/Menu.scss";
import React from "react";
import Modal from "../ui/Modal";
import Navigation from "./Navigation";
import Authentication from "./Authentication";
import closeMenuIcon from "../assets/icon-close-menu.svg";

const Menu = ({ showMenu = false, onClose }) => {
  return (
    <Modal showModal={showMenu}>
      <div className="menu">
        <button className="menu__close" onClick={onClose}>
          <img src={closeMenuIcon} alt="close" />
        </button>
        <Navigation />
        <Authentication />
      </div>
    </Modal>
  );
};

export default Menu;
