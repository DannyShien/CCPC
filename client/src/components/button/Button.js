import React from "react";
import "./Button.css";

const Button = ({ style, type, text, handleDelete }) => {
  return (
    <>
      <input
        className="button"
        type={type}
        value={text}
        style={style}
        onClick={handleDelete}
      />
    </>
  );
};

export default Button;
