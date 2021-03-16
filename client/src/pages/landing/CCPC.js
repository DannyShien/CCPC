import React, { Component } from "react";
import "./CCPC.css";
import Divider from "../../assets/Divider.png";
import axios from "axios";
import VideoPlayer from "../../components/videoDisplay/VideoPlayer";
import DropDown from "../../components/dropDown/DropDown";
import Button from "../../components/button/Button";

class CCPC extends Component {
  state = {
    defaultOption: "select option",
    isDisabled: true,
    years: [],
    videos: [],
  };

  // fetch data
  componentDidMount() {
    this.requestInitialData();
  }

  // get folder of year
  requestInitialData = async () => {
    try {
      const yearsUrl = "http://localhost:5000/years";
      const videosUrl = "http://localhost:5000/videos";
      // const url = "http://localhost:5000/";
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
        years: years,
        videos: videos,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // get videos from that folder

  // set data to state

  // pass down to videoplayer component

  handleDropdown = (e) => {
    console.log(e.target.value);
    this.setState({
      defaultOption: e.target.value,
      isDisabled: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { defaultOption, isDisabled, years, videos } = this.state;
    console.log(defaultOption, videos);
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

          <div className="variants">
            <form className="variantForm" onSubmit={this.handleSubmit}>
              <label>
                <DropDown
                  defaultValue={defaultOption}
                  handleOptions={this.handleDropdown}
                  selectFolders={years}
                />
              </label>
              {defaultOption ? (
                <label>
                  <DropDown
                    defaultValue={defaultOption}
                    handleOptions={this.handleDropdown}
                    selectFolders={videos}
                    isDisabled={isDisabled}
                  />
                </label>
              ) : null}
              <Button type="submit" text="Select" />
            </form>
          </div>

          <VideoPlayer />
        </section>
      </>
    );
  }
}

export default CCPC;
