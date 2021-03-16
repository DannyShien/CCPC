import React from "react";
import "./InputField.css";
const InputField = ({ type, name, value, placeholder, style, handleInput }) => {
  return (
    <>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        style={style}
        onChange={handleInput}
      />
    </>
  );
};

export default InputField;
