import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "./LiveVideo.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

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

  UploadNewVideo = (e) => {
    e.preventDefault();
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
    return (
      <div className="liveUpload">
        <div className="uploadForm">
          <form className="form" onSubmit={this.UploadNewVideo}>
            <label>
              Date
              <Input
                type="text"
                name="date"
                value={this.state.date}
                required
                style={{ width: "65%" }}
                handleInputChange={this.handleInputChange}
              />
            </label>
            <label>
              Title
              <Input
                type="text"
                name="title"
                value={this.state.title}
                required
                style={{ width: "65%" }}
                handleInputChange={this.handleInputChange}
              />
            </label>
            <label>
              Verse
              <Input
                type="text"
                name="verse"
                value={this.state.verse}
                required
                style={{ width: "65%" }}
                handleInputChange={this.handleInputChange}
              />
            </label>
            <label>
              Video ID
              <Input
                type="text"
                name="videoId"
                value={this.state.videoId}
                required
                style={{ width: "65%" }}
                handleInputChange={this.handleInputChange}
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
