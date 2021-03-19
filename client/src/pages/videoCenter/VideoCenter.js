import React, { Component } from "react";
import "./VideoCenter.css";
import CreateFolder from "../../components/createFolder/CreateFolder";
import Input from "../../components/input/Input";
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
    defaultFolder: "select folder",
    folders: [{ year_id: 0, name: "select folder" }],
    defaultVideo: "select folder",
    videos: [{ video_id: 0, title: "select folder" }],
    isDisabled: true,
  };

  componentDidMount() {
    this.requestInitialData();
  }

  requestInitialData = async () => {
    try {
      const yearsUrl = "http://localhost:5000/years";
      const videosUrl = "http://localhost:5000/videos";
      const yearsRequest = await axios.get(yearsUrl);
      const vidieoRequest = await axios.get(videosUrl);
      const initialData = await Promise.all([yearsRequest, vidieoRequest]).then(
        (res) => {
          return res;
        }
      );
      let foldersData = initialData[0].data;
      let videosData = initialData[1].data;

      this.setState({
        folders: [...this.state.folders, ...foldersData],
        videos: [...this.state.videos, ...videosData],
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

  handleFolderOption = (e) => {
    console.log("FOLDER ID: ", e.target.value);
    let id = parseInt(e.target.value);
    this.setState({
      selectedOptionId: id,
      defaultFolder: e.target.value,
    });
  };

  handleVideoOption = (e) => {
    // This method does not display the selected folder nor video folder...??
    console.log("VIDEO ID: ", e.target.value);
    let id = parseInt(e.target.value);
    const videos = this.state.videos;
    let defaultVid = videos.filter((video) => video.video_id === 0);
    let filteredVideoData = videos
      .filter((video) => video.year_id === id)
      .map((video) => {
        return video;
      });

    this.setState({
      selectedOptionId: id,
      defaultVideo: e.target.value,
      videos: [...defaultVid, ...filteredVideoData],
      isDisabled: false,
    });
    // CAN NOT RE-SELECT A DIFFERENT AFTER SELECTING THE FIRST ONE...
    // Create a Disclaimer component for current resolution.
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
    try {
      const year_id = this.state.selectedOptionId;
      console.log(year_id);
      await axios.delete(`http://localhost:5000/years/${year_id}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  editVideo = async (e) => {
    e.preventDefault();
  };

  deleteVideo = async () => {
    console.log("click delete btn");
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
      defaultFolder,
      folders,
      videos,
      defaultVideo,
      isDisabled,
    } = this.state;
    console.log(videos);
    return (
      <>
        {/* ========= CREATE FOLDER/YEAR ========== */}
        <div className="create__folder">
          <CreateFolder
            submitNewFolder={this.submitNewFolder}
            folderName={this.state.folderName}
            handleInputChange={this.handleInputChange}
          />
        </div>

        {/* ========== UPLOAD VIDEO ========== */}
        <div className="section__edits">
          <p>Upload Video</p>
          <form className="videoForm" onSubmit={this.submitNewVideo}>
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
                // type="text"
                name="date"
                value={this.state.date}
                placeholder="dd-mm-yyy"
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
                defaultValue={defaultFolder}
                handleOptions={this.handleFolderOption}
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
          <form className="videoForm" onSubmit={this.editVideo}>
            <label>
              Select Folder
              <DropDown
                defaultValue={defaultFolder}
                handleOptions={this.handleVideoOption}
                selectFolders={folders}
              />
            </label>

            {defaultVideo ? (
              <label>
                Select Video
                <DropDown
                  defaultValue={defaultVideo}
                  handleOptions={this.handleVideoOption}
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
