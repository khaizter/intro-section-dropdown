import "../styles/component/Navigation.scss";
import React from "react";
import Dropdown from "../ui/Dropdown";

const featuresDropdownItems = [
  <a href="#" className="navigation__link-item">
    <img
      src="./images/icon-todo.svg"
      alt=""
      className="navigation__dropdown-icon"
      aria-hidden="true"
    />
    Todo List
  </a>,
  <a href="#" className="navigation__link-item">
    <img
      src="./images/icon-calendar.svg"
      alt=""
      className="navigation__dropdown-icon"
      aria-hidden="true"
    />
    Calendar
  </a>,
  <a href="#" className="navigation__link-item">
    <img
      src="./images/icon-reminders.svg"
      alt=""
      className="navigation__dropdown-icon"
      aria-hidden="true"
    />
    Reminders
  </a>,
  <a href="#" className="navigation__link-item">
    <img
      src="./images/icon-planning.svg"
      alt=""
      className="navigation__dropdown-icon"
      aria-hidden="true"
    />
    Planning
  </a>,
];

const companyDropdownItems = [
  <a href="#" className="navigation__link-item">
    History
  </a>,
  <a href="#" className="navigation__link-item">
    Our Team
  </a>,
  <a href="#" className="navigation__link-item">
    Blog
  </a>,
];

const Navigation = ({ className = "" }) => {
  return (
    <nav className={`navigation ${className}`}>
      <ul className="navigation__links">
        <li>
          <Dropdown
            toggleText="Features"
            items={featuresDropdownItems}
            className="navigation__link-item"
          />
        </li>
        <li>
          <Dropdown
            toggleText="Company"
            items={companyDropdownItems}
            className="navigation__link-item"
          />
        </li>
        <li>
          <a href="#" className="navigation__link-item">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link-item">
            About
          </a>
        </li>
      </ul>
      {/* <div className="navigation__authentication">
        <button className="navigation__auth-btns navigation__auth-btns--login">
          Login
        </button>
        <button className="navigation__auth-btns navigation__auth-btns--register">
          Register
        </button>
      </div> */}
    </nav>
  );
};

export default Navigation;
