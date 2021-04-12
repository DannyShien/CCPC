import React from "react";
import "./Button.css";

const Button = ({ style, type, text, handleClick, disabled }) => {
  return (
    <>
      <button
        className="button"
        type={type}
        value={text}
        style={style}
        disabled={disabled}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
