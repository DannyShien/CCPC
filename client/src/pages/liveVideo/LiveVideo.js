import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "./LiveVideo.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";

class LiveVideo extends Component {
  state = {
    date: "",
    title: "",
    verse: "",
    videoId: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitNewSermon = async (e) => {
    e.preventDefault();
    try {
      const title = this.state.title;
      const verse = this.state.verse;
      const input_date = this.state.date;
      const video_key = this.state.videoId;
      await axios.post(`http://localhost:5000/sermons`, {
        title,
        verse,
        input_date,
        video_key,
      });
      window.location = "/admin/livevideo";
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };

  reset = () => {
    this.setState({
      date: "",
      title: "",
      verse: "",
      videoId: "",
    });
  };

  render() {
    const { date, title, verse, videoId } = this.state;

    return (
      <div className="liveUpload">
        <div className="uploadForm">
          <form className="form" onSubmit={this.submitNewSermon}>
            <label>
              Date
              <Input
                type="text"
                name="date"
                value={date}
                placeholder="yyyy-mm-dd"
                required
                style={{ width: "65%" }}
                handleInput={this.handleInputChange}
              />
            </label>
            <label>
              Title
              <Input
                type="text"
                name="title"
                value={title}
                required
                style={{ width: "65%" }}
                handleInput={this.handleInputChange}
              />
            </label>
            <label>
              Verse
              <Input
                type="text"
                name="verse"
                value={verse}
                required
                style={{ width: "65%" }}
                handleInput={this.handleInputChange}
              />
            </label>
            <label>
              Video ID
              <Input
                type="text"
                name="videoId"
                value={videoId}
                required
                style={{ width: "65%" }}
                handleInput={this.handleInputChange}
              />
            </label>

            <Button
              className="upload"
              text="Upload"
              type="submit"
              style={{ alignSelf: "flex-end", width: "65%" }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LiveVideo;
