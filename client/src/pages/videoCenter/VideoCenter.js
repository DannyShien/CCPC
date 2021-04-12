import React, { Component } from "react";
import "./VideoCenter.css";
import CreateYear from "../../components/createYearForm/CreateYear";
import UploadVideo from "../../components/uploadVideoForm/UploadVideo";
import EditYear from "../../components/editYearForm/EditYear";
import EditVideo from "../../components/editVideoForm/EditVideo";
import Button from "../../components/button/Button";
import axios from "axios";

class VideoCenter extends Component {
  state = {
    years: [{ year_id: 0, name: "select year" }],
    videos: [{ video_id: 0, title: "select video" }],
    sermons: [],
    isActive: false,
  };

  componentDidMount() {
    this.requestInitialData();
  }

  requestInitialData = async () => {
    try {
      const yearsUrl = "http://localhost:5000/years";
      const videosUrl = "http://localhost:5000/videos";
      const sermonUrl = "http://localhost:5000/sermons";
      const yearsRequest = await axios.get(yearsUrl);
      const videoRequest = await axios.get(videosUrl);
      const sermonRequest = await axios.get(sermonUrl);
      const initialData = await Promise.all([
        yearsRequest,
        videoRequest,
        sermonRequest,
      ]).then((res) => {
        return res;
      });
      let yearsData = initialData[0].data;
      let videosData = initialData[1].data;
      let sermonData = initialData[2].data;
      let active = sermonData.length ? true : false;

      this.setState({
        years: [...this.state.years, ...yearsData],
        videos: [...this.state.videos, ...videosData],
        sermons: [...sermonData],
        isActive: active,
      });
    } catch (err) {
      console.log(`DB NOT CONNECTED..:`, err.message);
    }
  };

  deleteSermon = async () => {
    try {
      const sermon = this.state.sermons[0];
      const sermon_id = sermon.sermon_id;
      await axios.delete(`http://localhost:5000/sermons/${sermon_id}`);
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    const { years, videos, isActive } = this.state;

    return (
      <>
        {/* ========= CREATE YEAR ========== */}
        <div className="create__folder">
          <CreateYear />
        </div>

        {/* ========== UPLOAD VIDEO ========== */}
        <div className="form__section">
          <p>Upload Video</p>
          <UploadVideo years={years} />
        </div>

        {/* ========== EDIT YEAR ========== */}
        <div className="form__section">
          <p>Edit Year</p>
          <EditYear years={years} />
        </div>

        {/* ========== EDIT VIDEO ========== */}
        <div className="form__section">
          <p>Edit Video</p>
          <EditVideo years={years} videos={videos} />
        </div>

        {/* ========== DELETE SERMON ========== */}
        <div className="caution__delete">
          <div>* CAUTION: IF BUTTON IS RED, CLICK TO DISABLE LINK *</div>
          <Button
            className="deleteBtn"
            text={
              isActive
                ? "DISABLE LIVE-SERVICE LINK"
                : "LIVE-SERVICE LINK DISABLED"
            }
            type="submit"
            style={
              isActive
                ? {
                    backgroundColor: "rgb(181, 0, 0)",
                    width: "65%",
                  }
                : {
                    backgroundColor: "rgb(215, 215, 215)",
                    color: "black",
                    width: "65%",
                  }
            }
            isActive={!isActive}
            handleClick={this.deleteSermon}
          />
        </div>
      </>
    );
  }
}

export default VideoCenter;
