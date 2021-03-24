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
        value={defaultValue}
        onChange={handleOptions}
        disabled={isDisabled}
      >
        {selectFolders.map((folder, i) => {
          let name = folder.name;
          let year_id = folder.year_id;
          let title = folder.title;
          let video_id = folder.video_id;
          return (
            <option value={video_id ? video_id : year_id} key={i}>
              {name ? name : title}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
