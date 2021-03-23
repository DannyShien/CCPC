import React, { Component } from "react";
import "./CCPC.css";
import Divider from "../../assets/Divider.png";
import axios from "axios";
// import DropDown from "../../components/dropDown/DropDown";
// import Button from "../../components/button/Button";
import VideoPlayer from "../../components/videoDisplay/VideoPlayer";
// import Youtube from "react-youtube";
import SelectVideo from "../../components/selectVideoForm/SelectVideo";

class CCPC extends Component {
  state = {
    selectedOptionId: 0,
    defaultFolder: "select folder",
    defaultVideo: "select video",
    isDisabled: true,
    defaultVideos: [{ video_id: 0, title: "select folder" }],
    folders: [{ year_id: 0, name: "select folder" }],
    videos: [{ video_id: 0, title: "select folder" }],

    posting_date: "",
    title: "",
    verse: "",
    video_id: "",
  };

  componentDidMount() {
    this.requestInitialData();
  }

  requestInitialData = async () => {
    try {
      const yearsUrl = "http://localhost:5000/years";
      const videosUrl = "http://localhost:5000/videos";
      const yearsReqeust = await axios.get(yearsUrl);
      const videosRequest = await axios.get(videosUrl);
      const initialData = await Promise.all([yearsReqeust, videosRequest]).then(
        (res) => {
          return res;
        }
      );
      let folders = initialData[0].data;
      let videos = initialData[1].data;

      this.setState({
        folders: [...this.state.folders, ...folders],
        videos: [...this.state.videos, ...videos],
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  handleFolderOption = (e) => {
    let id = parseInt(e.target.value);

    const videos = this.state.videos;
    let filteredVideoData = videos
      .filter((video) => video.year_id === id)
      .map((video) => {
        return video;
      });
    this.setState({
      selectedOptionId: id,
      defaultFolder: e.target.value,
      isDisabled: false,
      videos: [...this.state.defaultVideos, ...filteredVideoData],
    });
  };

  handleVideoOption = (e) => {
    let id = parseInt(e.target.value);

    this.setState({
      selectedOptionId: id,
      defaultVideo: e.target.value,
    });
  };

  handleSelectBtn = (e) => {
    e.preventDefault();
    let id = this.state.selectedOptionId;
    const videos = this.state.videos;
    let selectedVideo = videos.filter((video) => video.video_id === id)[0];
    let title = this.capitalizeName(selectedVideo.title);
    let verse = this.capitalizeName(selectedVideo.verse);
    let video_id = selectedVideo.video_key;
    // window.location = "/";  // this just reloads the whole page..

    this.setState({
      // date: // NEED TO CONVERT TIMESTAMP
      title,
      verse,
      video_id,
    });
  };

  capitalizeName = (name) => {
    const names = name.split(" ");
    const namesUpper = [];
    for (const n of names) {
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(" "));
    return namesUpper.join(" ");
  };

  // METHODS RELATING TO YOUTUBE FUNCTIONALITY // NOTES: not really need at this moment.
  // onReady = (e) => {
  //   console.log(e.target);
  //   // e.target.pauseVideo();
  //   e.target.playVideo();
  // };

  render() {
    const {
      defaultFolder,
      defaultVideo,
      isDisabled,
      folders,
      videos,
      // posting_date,
      title,
      verse,
      video_id,
    } = this.state;
    console.log(video_id);

    // const opts = { height: "390", width: "640", playerVars: { autoplay: 2 } };
    return (
      <>
        <section className="CCPC__body">
          <div className="titles">
            <h4>Previous Sermon</h4>
            <img src={Divider} alt="" />
            <p>1/19/2021</p>

            {/* <h1>"Receive the Holy Spirit"</h1> */}
            <h1>{title}</h1>
            {/* <h3>John 20:21-23</h3> */}
            <h3>{verse}</h3>
          </div>

          <SelectVideo
            defaultFolder={defaultFolder}
            defaultVideo={defaultVideo}
            folders={folders}
            videos={videos}
            isDisabled={isDisabled}
            handleSelectBtn={this.handleSelectBtn}
            handleFolderOption={this.handleFolderOption}
            handleVideoOption={this.handleVideoOption}
          />

          <VideoPlayer video_id={video_id} />
        </section>
      </>
    );
  }
}

export default CCPC;
