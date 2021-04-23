import React from "react";
import "./VideoPlayer.css";
import Youtube from "react-youtube";

const VideoPlayer = ({ video_id }) => {
  const opts = { playerVars: { autoplay: 2 } };

  return (
    <div className="video__container">
      <Youtube className="youtube" videoId={video_id} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
