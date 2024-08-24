import "../styles/component/Navigation.scss";
import React from "react";
import Dropdown from "../ui/Dropdown";

import iconTodo from "../assets/icon-todo.svg";
import iconCalendar from "../assets/icon-calendar.svg";
import iconReminders from "../assets/icon-reminders.svg";
import iconPlanning from "../assets/icon-planning.svg";

const featuresDropdownItems = [
  <a href="#" className="navigation__link-item">
    <img
      src={iconTodo}
      alt=""
      className="navigation__dropdown-icon"
      aria-hidden="true"
    />
    Todo List
  </a>,
  <a href="#" className="navigation__link-item">
    <img
      src={iconCalendar}
      alt=""
      className="navigation__dropdown-icon"
      aria-hidden="true"
    />
    Calendar
  </a>,
  <a href="#" className="navigation__link-item">
    <img
      src={iconReminders}
      alt=""
      className="navigation__dropdown-icon"
      aria-hidden="true"
    />
    Reminders
  </a>,
  <a href="#" className="navigation__link-item">
    <img
      src={iconPlanning}
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
