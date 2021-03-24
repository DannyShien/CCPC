import React from "react";
import "./VideoPlayer.css";
import Youtube from "react-youtube";

const VideoPlayer = ({ video_id }) => {
  const opts = { height: "390", width: "640", playerVars: { autoplay: 2 } };

  return (
    <div className="video__container">
      <Youtube videoId={video_id} opts={opts} />
    </div>

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
};

export default VideoPlayer;
