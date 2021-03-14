import React from "react";
import Divider from "../../assets/Divider.png";
import Video from "../../components/videoDisplay/Video";

const LiveSermons = () => {
  return (
    <>
      <section className="CCPC__body">
        <div className="titles">
          <h4>LIVE Sermon</h4>
          <img src={Divider} alt="" />
          <p>1/19/2021</p>

          <h1>"Receive the Holy Spirit"</h1>
          <h3>John 20:21-23</h3>
        </div>

        <Video />
      </section>
    </>
  );
};

export default LiveSermons;
