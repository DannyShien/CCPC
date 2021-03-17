import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "./VideoCenter.css";
import Input from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import DropDown from "../../components/dropDown/DropDown";
import axios from "axios";

class VideoCenter extends Component {
  state = {
    folderName: "",
    selectedOptionId: 0,
    title: "",
    verse: "",
    date: "",
    videoId: "",
    editName: "",
    defaultOption: "select folder",
    folders: [{ year_id: 0, name: "select folder" }],
    videos: [{ video_id: 0, name: "select folder" }],
    isDisabled: true,
    defaultOpt: "select folder",
  };

  componentDidMount() {
    this.requestYearsFolder();
  }

  requestYearsFolder = async () => {
    try {
      const response = await axios.get("http://localhost:5000/years");
      console.log(response);
      const foldersData = response.data;
      this.setState({
        folders: [...this.state.folders, ...foldersData],
      });
    } catch (err) {
      console.log(`DB NOT CONNECTED..:`, err.message);
    }
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelectedOption = (e) => {
    console.log(e.target.value);
    let id = parseInt(e.target.value);
    // this.setState({
    // });
    this.setState({
      selectedOptionId: id,
      defaultOption: e.target.value,
    });
  };

  handleOption = (e) => {
    this.setState({
      defaultOpt: e.target.value,
      isDisabled: false,
    });
  };

  submitNewFolder = async (e) => {
    e.preventDefault();
    try {
      const name = this.state.folderName;
      await axios.post(`http://localhost:5000/years`, {
        name,
      });
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };
  // USE THIS METHOD TO DISPLAY TITLE AND VERSE ON CCPC.JS
  // capitalizeName = (name) => {
  //   const names = name.split(" ");
  //   const namesUpper = [];

  //   for (const n of names) {
  //     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
  //     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  //   }
  //   console.log(namesUpper.join(" "));
  //   return namesUpper.join(" ");
  //   // console.log(namesUpper);
  // };

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
      // window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };

  editFolder = async (e) => {
    e.preventDefault();

    try {
      const editName = this.state.editName;
      const year_id = this.state.selectedOptionId;
      await axios.put(`http://localhost:5000/years/${year_id}`, {
        editName,
      });
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
  };

  deleteFolder = async () => {
    console.log("click delete btn");
    try {
      const year_id = this.state.selectedOptionId;
      console.log(year_id);
      await axios.delete(`http://localhost:5000/years/${year_id}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  reset = () => {
    this.setState({
      folderName: "",
      selectedOptionId: 0,
      title: "",
      verse: "",
      date: "",
      videoId: "",
      editName: "",
      isDisabled: true,
    });
  };

  render() {
    const {
      defaultOption,
      folders,
      videos,
      defaultOpt,
      isDisabled,
    } = this.state;

    return (
      <>
        {/* ========= CREATE FOLDER/YEAR ========== */}
        <div className="create__folder">
          <form className="videoCenterForm" onSubmit={this.submitNewFolder}>
            <label>Create Folder</label>
            <Input
              type="text"
              name="folderName"
              value={this.state.folderName}
              style={{ width: "35%" }}
              handleInput={this.handleInputChange}
            />
            <Button
              type="submit"
              text="Create Folder"
              style={{ width: "12%" }}
            />
          </form>
        </div>

        {/* ========== UPLOAD VIDEO ========== */}
        <div className="section__edits">
          <p>Upload Video</p>
          <form className="videoForm" onSubmit={this.submitNewVideo}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultOption}
                handleOptions={this.handleSelectedOption}
                selectFolders={folders}
              />
            </label>
            <label>
              Date
              <Input
                type="text"
                name="date"
                value={this.state.date}
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
                value={this.state.title}
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
                value={this.state.verse}
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
                value={this.state.videoId}
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
        </div>

        {/* ========== EDIT FOLDER/YEAR ========== */}
        <div className="section__edits">
          <p>Edit Folder</p>
          <form className="videoForm" onSubmit={this.editFolder}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultOption}
                handleOptions={this.handleSelectedOption}
                selectFolders={folders}
              />
            </label>
            <label>
              Edit Folder
              <Input
                type="text"
                name="editName"
                value={this.state.editName}
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
                handleDelete={this.deleteFolder}
              />
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
                selectFolders={folders}
              />
            </label>

            {defaultOpt ? (
              <label>
                Select Video
                <DropDown
                  defaultValue={defaultOpt}
                  handleOptions={this.handleOption}
                  selectFolders={videos}
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
                style={{ width: "65%" }}
                handleInput={this.handleInputChange}
              />
            </label>
            <label>
              Title
              <Input
                type="text"
                name="title"
                value={this.state.title}
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
                value={this.state.verse}
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
        </div>
      </>
    );
  }
}

export default VideoCenter;
