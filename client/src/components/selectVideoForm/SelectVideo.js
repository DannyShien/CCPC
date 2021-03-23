import React from "react";
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
    <>
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
          style={{ alignSelf: "flex-end", width: "65%" }}
        />
      </form>
    </>
  );
};

export default SelectVideo;
