import React, { Component } from "react";
import Divider from "../../assets/Divider.png";
import VideoPlayer from "../../components/videoDisplay/VideoPlayer";
import axios from "axios";

class LiveService extends Component {
  state = {
    date: "",
    title: "",
    verse: "",
    video_id: "",
    isShowPlayer: false,
  };

  componentDidMount() {
    this.requestSermonData();
  }

  requestSermonData = async () => {
    try {
      const sermonUrl = "http://localhost:5000/sermons";
      const sermonRequest = await axios.get(sermonUrl).then((res) => {
        return res.data;
      });
      let curSermon = sermonRequest.slice(-1)[0];
      let convertedDate = new Date(curSermon.input_date);
      let date = convertedDate.toLocaleDateString();
      let title = this.capitalizeName(curSermon.title);
      let verse = this.capitalizeName(curSermon.verse);
      let video_id = curSermon.video_key;

      this.setState({
        date,
        title,
        verse,
        video_id,
        isShowPlayer: true,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  capitalizeName = (name) => {
    const names = name.split(" ");
    const namesUpper = [];
    for (const n of names) {
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    return namesUpper.join(" ");
  };

  render() {
    const { date, title, verse, video_id, isShowPlayer } = this.state;

    return (
      <>
        <section className="CCPC__body">
          <div className="titles">
            <h4>Live Sermon</h4>
            <img src={Divider} alt="" />
            <p>{date}</p>

            <h1>{title}</h1>
            <h3>{verse}</h3>
          </div>

          {isShowPlayer ? <VideoPlayer video_id={video_id} /> : null}
        </section>
      </>
    );
  }
}

export default LiveService;
