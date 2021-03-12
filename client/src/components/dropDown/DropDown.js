import React from "react";
import "./DropDown.css";

const DropDown = ({
  defaultValue,
  handleOptions,
  selectFolders,
  isDisabled,
}) => {
  return (
    <>
      <select
        className="dropdown"
        defaultValue={defaultValue}
        onChange={handleOptions}
        disabled={isDisabled}
      >
        {selectFolders.map((folder, i) => {
          return (
            <option value={folder} key={i}>
              {folder}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
