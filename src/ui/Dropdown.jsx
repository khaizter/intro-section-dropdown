import "../styles/ui/Dropdown.scss";
import React, { useState } from "react";

const Dropdown = ({ toggleText, items, className = "" }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={`dropdown ${className}`}
      onMouseEnter={(e) => setCollapse(true)}
      onMouseLeave={(e) => setCollapse(false)}
    >
      <button className="dropdown__toggle">
        {toggleText}
        <img
          src={`./images/icon-arrow-${collapse ? "up" : "down"}.svg`}
          className="dropdown__arrow-span"
          alt=""
          aria-hidden="true"
        />
      </button>
      {collapse && (
        <ul className="dropdown__menu">
          {items.map((item) => {
            return <li key={Math.random().toString()}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
