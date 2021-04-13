import React, { Component, Suspense, lazy } from "react";
import "./CCPC.css";
import Divider from "../../assets/Divider.png";
import axios from "axios";
// import VideoPlayer from "../../components/videoDisplay/VideoPlayer";
import SelectVideo from "../../components/selectVideoForm/SelectVideo";

const VideoPlayer = lazy(() =>
  import("../../components/videoDisplay/VideoPlayer")
);

class CCPC extends Component {
  state = {
    selectedOptionId: 0,
    defaultYearText: "select year",
    defaultVideoText: "select video",
    isDisabled: true,
    isShowPlayer: false,
    defaultVideos: [{ video_id: 0, title: "select video" }],
    years: [{ year_id: 0, name: "select year" }],
    videos: [],
    updatedVideos: [{ video_id: 0, title: "select video" }],

    date: "",
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
      let years = initialData[0].data;
      let videos = initialData[1].data;

      this.setState({
        years: [...this.state.years, ...years],
        videos: [...this.state.defaultVideos, ...videos],
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  handleYearOption = (e) => {
    let id = parseInt(e.target.value);
    const videos = this.state.videos;
    let filteredVideoData = videos
      .filter((video) => video.year_id === id)
      .map((video) => {
        return video;
      });

    this.setState({
      selectedOptionId: id,
      defaultYearText: e.target.value,
      isDisabled: false,
      updatedVideos: [...this.state.defaultVideos, ...filteredVideoData],
    });
  };

  handleVideoOption = (e) => {
    let id = parseInt(e.target.value);

    this.setState({
      selectedOptionId: id,
      defaultVideoText: e.target.value,
    });
  };

  handleSelectBtn = (e) => {
    e.preventDefault();
    let id = this.state.selectedOptionId;
    const updatedVideo = this.state.updatedVideos;
    console.log(updatedVideo);
    let selectedVideo = updatedVideo.filter(
      (video) => video.video_id === id
    )[0];
    let convertedDate = new Date(selectedVideo.input_date);
    let date = convertedDate.toLocaleDateString();
    let title = this.capitalizeName(selectedVideo.title);
    let verse = this.capitalizeName(selectedVideo.verse);
    let video_id = selectedVideo.video_key;
    // window.location = "/";  // this just reloads the whole page..

    this.setState({
      date,
      title,
      verse,
      video_id,
      isShowPlayer: true,
    });
    this.reset();
  };

  capitalizeName = (name) => {
    const names = name.split(" ");
    const namesUpper = [];
    for (const n of names) {
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    return namesUpper.join(" ");
  };

  reset = () => {
    this.requestInitialData();
    this.setState({
      selectedOptionId: 0,
      defaultYearText: "select year",
      defaultVideoText: "select video",
      isDisabled: true,
      years: [{ year_id: 0, name: "select year" }],
      videos: [{ video_id: 0, title: "select year" }],
    });
  };

  render() {
    const {
      defaultYearText,
      defaultVideoText,
      isDisabled,
      years,
      updatedVideos,
      isShowPlayer,
      date,
      title,
      verse,
      video_id,
    } = this.state;

    return (
      <>
        <section className="CCPC__body">
          <div className="titles">
            <h4>Previous Sermon</h4>
            <img src={Divider} alt="" />
            <p>{date}</p>

            <h1>{title}</h1>
            <h3>{verse}</h3>
          </div>

          <SelectVideo
            defaultYearText={defaultYearText}
            defaultVideoText={defaultVideoText}
            years={years}
            videos={updatedVideos}
            isDisabled={isDisabled}
            handleSelectBtn={this.handleSelectBtn}
            handleYearOption={this.handleYearOption}
            handleVideoOption={this.handleVideoOption}
          />

          <Suspense>
            {/* SHOWS VIDEO PLAYER AFTER SELECTING OPTIONS */}
            {isShowPlayer ? <VideoPlayer video_id={video_id} /> : null}
          </Suspense>
        </section>
      </>
    );
  }
}

export default CCPC;
