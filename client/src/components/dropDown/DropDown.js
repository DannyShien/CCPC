import React from "react";
import "./DropDown.css";

const DropDown = ({
  defaultValue,
  handleOptions,
  selectFolders,
  isDisabled,
}) => {
  console.log(defaultValue);
  return (
    <>
      <select
        className="dropdown"
        value={defaultValue}
        onChange={handleOptions}
        disabled={isDisabled}
      >
        {selectFolders.map((folder) => {
          return (
            <option value={folder.name} key={folder.id}>
              {folder.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
