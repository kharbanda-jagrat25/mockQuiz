import React from "react";

import "./radioButton.scss";

const RadioButton = ({ checked, onClick, disabled, title }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className="radio-button-container">
      <input
        disabled={disabled}
        type="radio"
        checked={checked}
        id={title}
        onClick={handleClick}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default RadioButton;
