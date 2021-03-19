import React from "react";
import "./DropDown.css";

const DropDown = ({
  defaultValue,
  handleOptions,
  selectFolders,
  isDisabled,
}) => {
  console.log(selectFolders);
  return (
    <>
      <select
        className="dropdown"
        // value={selectFolders[0].name}
        value={defaultValue}
        onChange={handleOptions}
        disabled={isDisabled}
      >
        {selectFolders.map((folder, i) => {
          let name = folder.name;
          let year_id = folder.year_id;
          let title = folder.title;
          let video_id = folder.video_id;
          console.log(`{${name}, ${year_id}} : {${title}, ${video_id}}`);
          return (
            <option value={year_id ? year_id : video_id} key={i}>
              {name ? name : title}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
