import React, { Component } from "react";
import "./CreateFolder.css";
import Input from "../input/Input";
import Button from "../button/Button";
import axios from "axios";

class CreateFolder extends Component {
  state = {
    folderName: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitNewFolder = async (e) => {
    e.preventDefault();
    try {
      const name = this.state.folderName;
      await axios.post(`http://localhost:5000/years`, {
        name,
      });
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };

  reset = () => {
    this.setState({
      folderName: "",
    });
  };

  render() {
    const { folderName } = this.state;

    return (
      <>
        <form className="videoCenterForm" onSubmit={this.submitNewFolder}>
          <label htmlFor="create">Create Folder</label>
          <Input
            type="text"
            formId="create"
            name="folderName"
            value={folderName}
            style={{ width: "35%" }}
            handleInput={this.handleInputChange}
          />
          <Button type="submit" text="Create Folder" style={{ width: "12%" }} />
        </form>
      </>
    );
  }
}

export default CreateFolder;
