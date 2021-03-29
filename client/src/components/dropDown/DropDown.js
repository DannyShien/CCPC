import React from "react";
import "./DropDown.css";

const DropDown = ({
  defaultValue,
  handleOptions,
  selectOptions,
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
        {selectOptions.map((option, i) => {
          let year = option.name;
          let year_id = option.year_id;
          let title = option.title;
          let video_id = option.video_id;
          return (
            <option value={video_id ? video_id : year_id} key={i}>
              {year ? year : title}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
