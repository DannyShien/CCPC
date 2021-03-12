import React from "react";
import "./InputField.css";
const InputField = ({ type, name, value, style, handleInput }) => {
  return (
    <>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        style={style}
        onChange={handleInput}
      />
    </>
  );
};

export default InputField;
