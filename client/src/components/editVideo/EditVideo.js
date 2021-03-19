import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import Input from "../input/Input";
import DropDown from "../dropDown/DropDown";
import Button from "../button/Button";
// import axios from "axios";

class EditVideo extends Component {
  state = {
    date: "",
    title: "",
    verse: "",
    isDisabled: true,
    selectedOptionId: 0,
    defaultFolder: "select folder",
    defaultVideo: "select video",
    videos: [{ video_id: 0, title: "select folder" }],
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFolderOption = (e) => {
    let id = parseInt(e.target.value);

    const videos = this.props.videos;
    let filteredVideoData = videos
      .filter((video) => video.year_id === id)
      .map((video) => {
        return video;
      });

    this.setState({
      selectedOptionId: id,
      defaultFolder: e.target.value,
      isDisabled: false,
      videos: [...this.state.videos, ...filteredVideoData],
    });
  };

  handleVideoOption = (e) => {
    let id = parseInt(e.target.value);

    this.setState({
      selectedOptionId: id,
      defaultVideo: e.target.value,
    });
    // Create a Disclaimer component for current resolution.
  };

  editVideo = async (e) => {
    e.preventDefault();

    this.reset();
  };

  deleteVideo = async () => {
    console.log("click delete btn");
  };

  reset = () => {
    this.setState({
      date: "",
      title: "",
      verse: "",
      isDisabled: true,
    });
  };

  render() {
    const {
      date,
      title,
      verse,
      defaultFolder,
      defaultVideo,
      isDisabled,
      videos,
    } = this.state;
    const { folders } = this.props;
    console.log(defaultFolder, `VIDEOS:`, videos);
    return (
      <>
        <form className="form" onSubmit={this.editVideo}>
          <label>
            Select Folder
            <DropDown
              defaultValue={defaultFolder}
              handleOptions={this.handleFolderOption}
              selectFolders={folders}
            />
          </label>

          {!defaultFolder ? (
            <label>
              Select Video
              <DropDown
                defaultValue={defaultVideo}
                selectFolders={videos}
                isDisabled={isDisabled}
                handleOptions={this.handleVideoOption}
              />
            </label>
          ) : (
            <label>
              Select Video
              <DropDown
                handleOptions={this.handleVideoOption}
                defaultValue={defaultVideo}
                selectFolders={videos}
                isDisabled={isDisabled}
              />
            </label>
          )}

          <label>
            Date
            <Input
              type="text"
              name="date"
              value={date}
              required
              style={{ width: "65%" }}
              handleInput={this.handleInputChange}
            />
          </label>
          <label>
            Title
            <Input
              type="text"
              name="title"
              value={title}
              required
              style={{ width: "65%" }}
              handleInput={this.handleInputChange}
            />
          </label>
          <label>
            Verse
            <Input
              type="text"
              name="verse"
              value={verse}
              required
              style={{ width: "65%" }}
              handleInput={this.handleInputChange}
            />
          </label>

          <div className="btn__container">
            <Button type="submit" text="Edit" style={{ width: "45%" }} />
            <Button type="submit" text="Remove" style={{ width: "45%" }} />
          </div>
        </form>
      </>
    );
  }
}

export default EditVideo;
