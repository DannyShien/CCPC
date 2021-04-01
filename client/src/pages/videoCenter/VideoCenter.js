import React, { Component } from "react";
import "./VideoCenter.css";
import CreateYear from "../../components/createYearForm/CreateYear";
import UploadVideo from "../../components/uploadVideoForm/UploadVideo";
import EditYear from "../../components/editYearForm/EditYear";
import EditVideo from "../../components/editVideoForm/EditVideo";
import axios from "axios";

class VideoCenter extends Component {
  state = {
    years: [{ year_id: 0, name: "select year" }],
    videos: [{ video_id: 0, title: "select video" }],
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
      let yearsData = initialData[0].data;
      let videosData = initialData[1].data;

      this.setState({
        years: [...this.state.years, ...yearsData],
        videos: [...this.state.videos, ...videosData],
      });
    } catch (err) {
      console.log(`DB NOT CONNECTED..:`, err.message);
    }
  };

  render() {
    const { years, videos } = this.state;

    return (
      <>
        {/* ========= CREATE YEAR ========== */}
        <div className="create__folder">
          <CreateYear
          // submitNewYear={this.submitNewYear}
          // years={this.state.years}
          // handleInputChange={this.handleInputChange}
          />
        </div>

        {/* ========== UPLOAD VIDEO ========== */}
        <div className="form_section">
          <p>Upload Video</p>
          <UploadVideo years={years} />
        </div>

        {/* ========== EDIT YEAR ========== */}
        <div className="form_section">
          <p>Edit Year</p>
          <EditYear years={years} />
        </div>

        {/* ========== EDIT VIDEO ========== */}
        <p style={{ fontSize: "60%" }}>
          * disclaimer: please refresh page before re-selecting a different
          option *
        </p>

        <div className="form_section">
          <p>Edit Video</p>
          <EditVideo years={years} videos={videos} />
        </div>
      </>
    );
  }
}

export default VideoCenter;
