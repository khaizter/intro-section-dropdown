import "../styles/component/Authentication.scss";

import React from "react";

const Authentication = ({ className = "" }) => {
  return (
    <div className={`authentication ${className}`}>
      <button className="authentication__button authentication__button--login">
        Login
      </button>
      <button className="authentication__button authentication__button--register">
        Register
      </button>
    </div>
  );
};

export default Authentication;
