import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import Input from "../input/Input";
import DropDown from "../dropDown/DropDown";
import Button from "../button/Button";
import axios from "axios";

class UploadVideo extends Component {
  state = {
    title: "",
    verse: "",
    date: "",
    videoId: "",
    selectedOptionId: 0,
    defaultFolder: "select folder",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFolderOption = (e) => {
    console.log("FOLDER ID: ", e.target.value);
    let id = parseInt(e.target.value);
    this.setState({
      selectedOptionId: id,
      defaultFolder: e.target.value,
    });
  };

  submitNewVideo = async (e) => {
    e.preventDefault();
    try {
      const year_id = this.state.selectedOptionId;
      const input_date = this.state.date;
      const title = this.state.title;
      const verse = this.state.verse;
      const video_key = this.state.videoId;
      await axios.post(`http://localhost:5000/videos`, {
        year_id,
        input_date,
        title,
        verse,
        video_key,
      });
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };

  reset = () => {
    this.setState = {
      title: "",
      verse: "",
      date: "",
      videoId: "",
      selectedOptionId: 0,
    };
  };

  render() {
    const { defaultFolder, date, title, verse, videoId } = this.state;
    const { folders } = this.props;

    return (
      <>
        <form className="form" onSubmit={this.submitNewVideo}>
          <label>
            Select Folder
            <DropDown
              defaultValue={defaultFolder}
              handleOptions={this.handleFolderOption}
              selectFolders={folders}
            />
          </label>
          <label>
            Date
            <Input
              type="text"
              name="date"
              value={date}
              placeholder="yyyy-mm-dd"
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
          <label>
            Video ID
            <Input
              type="text"
              name="videoId"
              value={videoId}
              required
              style={{ width: "65%" }}
              handleInput={this.handleInputChange}
            />
          </label>
          <Button
            type="submit"
            text="Upload"
            style={{ alignSelf: "flex-end", width: "65%" }}
          />
        </form>
      </>
    );
  }
}

export default UploadVideo;
