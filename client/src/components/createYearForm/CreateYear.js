import React, { Component } from "react";
import "./CreateYear.css";
import Input from "../input/Input";
import Button from "../button/Button";
import axios from "axios";

class CreateYear extends Component {
  state = {
    year: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitNewYear = async (e) => {
    e.preventDefault();
    try {
      const name = this.state.year;
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
      year: "",
    });
  };

  render() {
    const { year } = this.state;

    return (
      <>
        <form className="videoCenterForm" onSubmit={this.submitNewYear}>
          <label htmlFor="create">Create Folder</label>
          <Input
            type="text"
            formId="create"
            name="year"
            value={year}
            style={{ width: "35%" }}
            handleInput={this.handleInputChange}
          />
          <Button type="submit" text="Create Folder" style={{ width: "12%" }} />
        </form>
      </>
    );
  }
}

export default CreateYear;
