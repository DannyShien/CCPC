import React from "react";
import "./DropDown.css";

const DropDown = ({
  defaultValue,
  handleOptions,
  selectFolders,
  isDisabled,
}) => {
  console.log(defaultValue, selectFolders);
  return (
    <>
      <select
        className="dropdown"
        value={selectFolders[0].name}
        onChange={handleOptions}
        disabled={isDisabled}
      >
        {selectFolders.map((folder, i) => {
          console.log(folder);
          let name = folder.name;
          let id = folder.year_id;
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
