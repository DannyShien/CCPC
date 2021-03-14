import React, { Component } from "react";
import "./CCPC.css";
import Divider from "../../assets/Divider.png";
import VideoPlayer from "../../components/videoDisplay/VideoPlayer";

class CCPC extends Component {
  state = {};

  // fetch data for videos
  componentDidMount() {}

  // set data to state

  // pass down to videoplayer component

  render() {
    return (
      <>
        <section className="CCPC__body">
          <div className="titles">
            <h4>Previous Sermon</h4>
            <img src={Divider} alt="" />
            <p>1/19/2021</p>

            <h1>"Receive the Holy Spirit"</h1>
            <h3>John 20:21-23</h3>
          </div>

          <VideoPlayer />
        </section>
      </>
    );
  }
}

export default CCPC;
