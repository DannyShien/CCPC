import React from "react";
import "./SelectVideo.css";
import DropDown from "../dropDown/DropDown";
import Button from "../button/Button";

const SelectVideo = ({
  defaultFolder,
  folders,
  defaultVideo,
  videos,
  isDisabled,
  handleSelectBtn,
  handleFolderOption,
  handleVideoOption,
}) => {
  return (
    <div className="options">
      <form className="optionsForm" onSubmit={handleSelectBtn}>
        <label>
          Select Folder
          <DropDown
            defaultValue={defaultFolder}
            handleOptions={handleFolderOption}
            selectFolders={folders}
          />
        </label>

        {defaultFolder ? (
          <label>
            Select Video
            <DropDown
              defaultValue={defaultVideo}
              selectFolders={videos}
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
