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
      const response = await axios.post(`http://localhost:5000/videos`, {
        year_id,
        input_date,
        title,
        verse,
        video_key,
      });
      console.log(response);
      // window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };

  submitEdit = async (e) => {
    e.preventDefault();
    try {
      const editName = this.state.editName;
      const year_id = this.state.selectedOptionId;
      console.log(`edit`, editName, year_id);
      const response = await axios.put(
        `http://localhost:5000/years/${year_id}`,
        {
          editName,
        }
      );
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
  };

  handleSelectedOption = (e) => {
    console.log(e.target.value);
    let id = parseInt(e.target.value);
    this.setState({
      selectedOptionId: id,
    });
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

  handleOption = (e) => {
    this.setState({
      defaultOpt: e.target.value,
      isDisabled: false,
    });
  };

  render() {
    // refactor these values into the component..
    const createInput = {
      height: "2em",
      width: "35%",
    };
    const sectionInput = {
      height: "2em",
      width: "65%",
    };
    const createBtn = {
      height: "2em",
      width: "12%",
    };
    const uploadBtn = {
      height: "2em",
      alignSelf: "flex-end",
      width: "65%",
    };
    const editRemoveBtn = {
      height: "2em",
      width: "45%",
    };

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
              style={createInput}
              handleInput={this.handleInputChange}
            />
            <Button type="submit" text="Create Folder" style={createBtn} />
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
                style={sectionInput}
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
                style={sectionInput}
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
                style={sectionInput}
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
                style={sectionInput}
                handleInput={this.handleInputChange}
              />
            </label>
            <Button type="submit" text="Upload" style={uploadBtn} />
          </form>
        </div>

        {/* ========== EDIT FOLDER/YEAR ========== */}
        <div className="section__edits">
          <p>Edit Folder</p>
          <form className="videoForm" onSubmit={this.submitEdit}>
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
                style={sectionInput}
                handleInput={this.handleInputChange}
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
                style={sectionInput}
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
                style={sectionInput}
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
                style={sectionInput}
                handleInput={this.handleInputChange}
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
