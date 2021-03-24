import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import Input from "../input/Input";
import DropDown from "../dropDown/DropDown";
import Button from "../button/Button";
import axios from "axios";

class EditVideo extends Component {
  state = {
    date: "",
    title: "",
    verse: "",
    isDisabled: true,
    selectedOptionId: 0,
    defaultFolder: "select folder",
    defaultVideo: "select video",
    videos: [{ video_id: 0, title: "select video" }],
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFolderOption = (e) => {
    const videos = this.props.videos;
    let id = parseInt(e.target.value);
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
    // this.resetFolder(id);
    // this.resetVideo(id);
  };

  handleVideoOption = (e) => {
    let id = parseInt(e.target.value);

    this.setState({
      selectedOptionId: id,
      defaultVideo: e.target.value,
      // videos: this.state.videos,
    });
    // this.resetVideo(id); // might not need this as well...
  };

  // Edit video will need more logic. Either edit all fields, edit date, edit title or edit verse.
  editVideo = async (e) => {
    e.preventDefault();
    try {
      const video_id = this.state.selectedOptionId;
      const date = this.state.date;
      const title = this.state.title;
      const verse = this.state.verse;
      await axios.put(`http://localhost:5000/videos/${video_id}`, {
        date,
        title,
        verse,
      });
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };

  deleteVideo = async () => {
    try {
      const video_id = this.state.selectedOptionId;
      await axios.delete(`http://localhost:5000/videos/${video_id}`);
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
  };

  // resetFolder = (id) => {
  //   console.log(`RESET`, id, `state:`, this.state.videos);
  //   const videos = this.props.videos;
  //   let filteredVideoData = videos
  //     .filter((video) => video.year_id === id)
  //     .map((video) => {
  //       return video;
  //     });
  //   this.setState({
  //     selectedOptionId: id,
  //     defaultFolder: id,
  //     // isDisabled: true, // dont think this is needed
  //     videos: [...this.state.videos, ...filteredVideoData],
  //     // videos: this.state.videos, // resets video state
  //   });
  // };

  // resetVideo = (id) => {
  //   console.log(`reset video:`, id);

  //   this.setState({
  //     selectedOptionId: id,
  //     defaultVideo: "select video",
  //     // defaultVideo: id,
  //     // videos: [...this.state.videos, ...filteredVideoData],
  //   });
  // };

  reset = () => {
    this.setState({
      date: "",
      title: "",
      verse: "",
      isDisabled: true,
      selectedOptionId: 0,
      defaultVideo: "select video",
      videos: [{ video_id: 0, title: "select folder" }],
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
    console.log(defaultVideo);
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

          {!defaultVideo ? null : (
            <label>
              Select Video
              <DropDown
                defaultValue={defaultVideo}
                selectFolders={videos}
                isDisabled={isDisabled}
                handleOptions={this.handleVideoOption}
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
            <Button
              type="submit"
              text="Remove"
              style={{ width: "45%" }}
              handleDelete={this.deleteVideo}
            />
          </div>
        </form>
      </>
    );
  }
}

export default EditVideo;
