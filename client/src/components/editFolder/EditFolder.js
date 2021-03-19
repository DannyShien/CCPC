import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import Input from "../input/Input";
import Button from "../button/Button";
import DropDown from "../dropDown/DropDown";
import axios from "axios";

class EditFolder extends Component {
  state = {
    editName: "",
    selectedOptionId: 0,
    defaultFolder: "select folder",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFolderOption = (e) => {
    console.log("FOLDER ID: ", e.target.value);
    let id = parseInt(e.target.value);
    this.setState({
      selectedOptionId: id,
      defaultFolder: e.target.value,
    });
  };

  editFolder = async (e) => {
    e.preventDefault();
    try {
      const editName = this.state.editName;
      const year_id = this.state.selectedOptionId;
      await axios.put(`http://localhost:5000/years/${year_id}`, {
        editName,
      });
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };

  deleteFolder = async () => {
    try {
      const year_id = this.state.selectedOptionId;
      console.log(year_id);
      await axios.delete(`http://localhost:5000/years/${year_id}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  reset = () => {
    this.setState = {
      editName: "",
    };
  };

  render() {
    const { editName, defaultFolder } = this.state;
    const { folders } = this.props;

    return (
      <>
        <form className="form" onSubmit={this.editFolder}>
          <label>
            Select Folder
            <DropDown
              defaultValue={defaultFolder}
              handleOptions={this.handleFolderOption}
              selectFolders={folders}
            />
          </label>
          <label>
            Edit Folder
            <Input
              type="text"
              name="editName"
              value={editName}
              style={{ width: "65%" }}
              handleInput={this.handleInputChange}
            />
          </label>

          <div className="btn__container">
            <Button type="submit" text="Edit" style={{ width: "45%" }} />
            <Button
              type="submit"
              text="Remove"
              style={{ width: "45%" }}
              handleDelete={this.deleteFolder}
            />
          </div>
        </form>
      </>
    );
  }
}

export default EditFolder;
