import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "./VideoCenter.css";
import Input from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import DropDown from "../../components/dropDown/DropDown";

class VideoCenter extends Component {
  state = {
    folderName: "",
    title: "",
    verse: "",
    date: "",
    videoId: "",
    editFolder: "",
    editVideo: "",
    defaultOption: "select folder",
    selectFolders: ["select folder", "folder1", "folder2", "folder3"],
    selectVideos: ["select video", "video1", "video2", "video3"],
    isDisabled: true,
    defaultOpt: "select folder",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Submit:`,
      this.state.defaultOption,
      this.state.title,
      this.state.videoId
    );
    // Does something here and submits to backend..
    this.reset();
  };

  reset = () => {
    this.setState({
      folderName: "",
      title: "",
      verse: "",
      date: "",
      videoId: "",
      editFolder: "",
      editVideo: "",
      defaultOption: "select folder",
      isDisabled: true,
      defaultOpt: "select folder",
    });
  };

  handleDefaultOptions = (e) => {
    this.setState({
      defaultOption: e.target.value,
    });
  };

  handleOption = (e) => {
    this.setState({
      defaultOpt: e.target.value,
      isDisabled: false,
    });
  };

  render() {
    const createInput = {
      height: "2em",
      width: "35%",
    };
    const sectionInput = {
      // height: "100%",
      height: "2em",
      width: "65%",
    };
    const createBtn = {
      height: "2em",
      width: "12%",
    };
    const uploadBtn = {
      // height: "85%",
      height: "2em",
      alignSelf: "flex-end",
      width: "65%",
    };
    const editRemoveBtn = {
      // height: "100%",
      height: "2em",
      width: "45%",
    };

    const {
      defaultOption,
      selectFolders,
      selectVideos,
      defaultOpt,
      isDisabled,
    } = this.state;

    return (
      <>
        {/* ========= CREATE FOLDER/YEAR ========== */}
        <div className="create__folder">
          <form className="videoCenterForm" onSubmit={this.handleSubmit}>
            <label>Create Folder</label>
            <Input
              type="text"
              name="folderName"
              value={this.state.folderName}
              style={createInput}
              handleInput={this.handleInput}
            />
            <Button type="submit" text="Create Folder" style={createBtn} />
          </form>
        </div>

        {/* ========== UPLOAD VIDEO ========== */}
        <div className="section__edits">
          <p>Upload Video</p>
          <form className="videoForm" onSubmit={this.handleSubmit}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultOption}
                handleOptions={this.handleDefaultOptions}
                selectFolders={selectFolders}
              />
            </label>
            <label>
              Date
              <Input
                type="text"
                name="date"
                value={this.state.date}
                required
                style={sectionInput}
                handleInput={this.handleInput}
              />
            </label>
            <label>
              Title
              <Input
                type="text"
                name="title"
                value={this.state.title}
                required
                style={sectionInput}
                handleInput={this.handleInput}
              />
            </label>
            <label>
              Verse
              <Input
                type="text"
                name="verse"
                value={this.state.verse}
                required
                style={sectionInput}
                handleInput={this.handleInput}
              />
            </label>
            <label>
              Video ID
              <Input
                type="text"
                name="videoId"
                value={this.state.videoId}
                required
                style={sectionInput}
                handleInput={this.handleInput}
              />
            </label>
            <Button type="submit" text="Upload" style={uploadBtn} />
          </form>
        </div>

        {/* ========== EDIT FOLDER/YEAR ========== */}
        <div className="section__edits">
          <p>Edit Folder</p>
          <form className="videoForm" onSubmit={this.handleSubmit}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultOption}
                handleOptions={this.handleDefaultOptions}
                selectFolders={selectFolders}
              />
            </label>
            <label>
              Edit Folder
              <Input
                type="text"
                name="editFolder"
                value={this.state.editFolder}
                style={sectionInput}
                handleInput={this.handleInput}
              />
            </label>

            <div className="btn__container">
              <Button type="submit" text="Edit" style={editRemoveBtn} />
              <Button type="submit" text="Remove" style={editRemoveBtn} />
            </div>
          </form>
        </div>

        {/* ========== EDIT VIDEO ========== */}
        <div className="section__edits">
          <p>Edit Video</p>
          <form className="videoForm" onSubmit={this.handleSubmit}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultOption}
                handleOptions={this.handleOption}
                selectFolders={selectFolders}
              />
            </label>

            {defaultOpt ? (
              <label>
                Select Video
                <DropDown
                  defaultValue={defaultOpt}
                  handleOptions={this.handleOption}
                  selectFolders={selectVideos}
                  isDisabled={isDisabled}
                />
              </label>
            ) : null}

            <label>
              Date
              <Input
                type="text"
                name="date"
                value={this.state.date}
                required
                style={sectionInput}
                handleInput={this.handleInput}
              />
            </label>
            <label>
              Title
              <Input
                type="text"
                name="title"
                value={this.state.title}
                required
                style={sectionInput}
                handleInput={this.handleInput}
              />
            </label>
            <label>
              Verse
              <Input
                type="text"
                name="verse"
                value={this.state.verse}
                required
                style={sectionInput}
                handleInput={this.handleInput}
              />
            </label>

            <div className="btn__container">
              <Button type="submit" text="Edit" style={editRemoveBtn} />
              <Button type="submit" text="Remove" style={editRemoveBtn} />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default VideoCenter;
