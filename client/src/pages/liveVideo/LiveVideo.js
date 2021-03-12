import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "./LiveVideo.css";
import Input from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

class LiveVideo extends Component {
  state = {
    date: "",
    title: "",
    verse: "",
    videoId: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Does something here and submits to backend..
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

  liveVideoForm = () => {
    const inputStyle = {
      height: "2em",
      width: "65%",
    };

    const btnStyle = {
      alignSelf: "flex-end",
      height: "2em",
      width: "65%",
    };

    return (
      <>
        <label>
          Date
          <Input
            type="text"
            name="date"
            value={this.state.date}
            required
            style={inputStyle}
            handleInput={this.handleInput}
          />
        </label>
        <label>
          Title
          <Input
            type="text"
            name="title"
            value={this.state.title}
            required
            style={inputStyle}
            handleInput={this.handleInput}
          />
        </label>
        <label>
          Verse
          <Input
            type="text"
            name="verse"
            value={this.state.verse}
            required
            style={inputStyle}
            handleInput={this.handleInput}
          />
        </label>
        <label>
          Video ID
          <Input
            type="text"
            name="videoId"
            value={this.state.videoId}
            required
            style={inputStyle}
            handleInput={this.handleInput}
          />
        </label>

        <Button
          className="upload"
          text="Upload"
          type="submit"
          style={btnStyle}
        />
      </>
    );
  };

  render() {
    return (
      <div className="liveUpload">
        <div className="section__edits">
          <form className="uploadForm" onSubmit={this.handleSubmit}>
            {this.liveVideoForm()}
          </form>
        </div>
      </div>
    );
  }
}

export default LiveVideo;
