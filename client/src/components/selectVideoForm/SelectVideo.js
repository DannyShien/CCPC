import React from "react";
import "./SelectVideo.css";
import DropDown from "../dropDown/DropDown";
import Button from "../button/Button";

const SelectVideo = ({
  defaultYear,
  years,
  defaultVideo,
  videos,
  isDisabled,
  handleSelectBtn,
  handleYearOption,
  handleVideoOption,
}) => {
  return (
    <div className="options">
      <form className="optionsForm" onSubmit={handleSelectBtn}>
        <label>
          Select Year
          <DropDown
            defaultValue={defaultYear}
            handleOptions={handleYearOption}
            selectOptions={years}
          />
        </label>

        {defaultYear ? (
          <label>
            Select Video
            <DropDown
              defaultValue={defaultVideo}
              selectOptions={videos}
              isDisabled={isDisabled}
              handleOptions={handleVideoOption}
            />
          </label>
        ) : null}
        <Button
          type="submit"
          text="Select"
          style={{ alignSelf: "flex-end", fontSize: "70%", width: "65%" }}
        />
      </form>
    </div>
  );
};

export default SelectVideo;
