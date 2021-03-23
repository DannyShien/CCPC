import React, { Component } from "react";
import "./VideoCenter.css";
import CreateFolder from "../../components/createFolderForm/CreateFolder";
import UploadVideo from "../../components/uploadVideoForm/UploadVideo";
import EditFolder from "../../components/editFolderForm/EditFolder";
import EditVideo from "../../components/editVideoForm/EditVideo";
import axios from "axios";

class VideoCenter extends Component {
  state = {
    folders: [{ year_id: 0, name: "select folder" }],
    videos: [{ video_id: 0, title: "select folder" }],
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

  render() {
    const { folders, videos } = this.state;

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
        <div className="form_section">
          <p>Upload Video</p>
          <UploadVideo folders={folders} />
        </div>

        {/* ========== EDIT FOLDER/YEAR ========== */}
        <div className="form_section">
          <p>Edit Folder</p>
          <EditFolder folders={folders} />
        </div>

        {/* ========== EDIT VIDEO ========== */}
        <p style={{ fontSize: "60%" }}>
          * disclaimer: please refresh page before re-selecting a different
          option *
        </p>

        <div className="form_section">
          <p>Edit Video</p>
          <EditVideo folders={folders} videos={videos} />
        </div>
      </>
    );
  }
}

export default VideoCenter;
