import React from "react";
import "./Button.css";

const Button = ({ style, type, text, handleClick, isActive }) => {
  return (
    <>
      <button
        className="button"
        type={type}
        value={text}
        style={style}
        disabled={isActive}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
