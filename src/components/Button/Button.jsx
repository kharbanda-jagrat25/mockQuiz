import React from "react";

import { BUTTON_TYPE } from "./constants";

import "./button.scss";

const Button = ({
  type = "button",
  subType = BUTTON_TYPE.PRIMARY,
  buttonIcon,
  title,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`main-button ${subType} ${className}`}
      onClick={onClick}
    >
      <h6>{title}</h6>
      <div className="icon">{buttonIcon && buttonIcon}</div>
    </button>
  );
};

export default Button;
