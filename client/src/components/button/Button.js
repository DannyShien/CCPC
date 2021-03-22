import React from "react";
import "./Button.css";

const Button = ({ style, type, text, handleDelete }) => {
  return (
    <>
      <button
        className="button"
        type={type}
        value={text}
        style={style}
        onClick={handleDelete}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
