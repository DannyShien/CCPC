import React, { Component } from "react";
import "./Video.css";
import Youtube from "react-youtube";

class VideoPlayer extends Component {
  render() {
    return (
      <Youtube />

      // <div className="video__container">
      //   <embed
      //     src="https://www.youtube.com/embed/sfvrjwVihFY"
      //     wmode="transparent"
      //     type="video/mp4"
      //     width="1000px"
      //     height="500px"
      //     allow="autoplay; encrypted-media; picture-in-picture"
      //     // allowFullScreen="true"
      //     title="Keyboard Cat"
      //   />
      // </div>
    );
  }
}

export default VideoPlayer;
