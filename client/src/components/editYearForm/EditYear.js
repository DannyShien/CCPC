import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import Input from "../input/Input";
import Button from "../button/Button";
import DropDown from "../dropDown/DropDown";
import axios from "axios";

class EditYear extends Component {
  state = {
    editYear: "",
    selectedOptionId: 0,
    defaultYearText: "select year",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFolderOption = (e) => {
    console.log("YEAR ID: ", e.target.value);
    let id = parseInt(e.target.value);
    this.setState({
      selectedOptionId: id,
      defaultYearText: e.target.value,
    });
  };

  editYear = async (e) => {
    e.preventDefault();
    try {
      const editYear = this.state.editYear;
      const year_id = this.state.selectedOptionId;
      await axios.put(`http://localhost:5000/years/${year_id}`, {
        editYear,
      });
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
    this.reset();
  };

  deleteYear = async () => {
    try {
      const year_id = this.state.selectedOptionId;
      await axios.delete(`http://localhost:5000/years/${year_id}`);
      window.location = "/admin/videocenter";
    } catch (err) {
      console.error(err.message);
    }
  };

  reset = () => {
    this.setState = {
      editYear: "",
    };
  };

  render() {
    const { editYear, defaultYearText } = this.state;
    const { years } = this.props;

    return (
      <>
        <form className="form" onSubmit={this.editYear}>
          <label>
            Select Year
            <DropDown
              defaultValue={defaultYearText}
              handleOptions={this.handleFolderOption}
              selectOptions={years}
            />
          </label>
          <label>
            Edit Year
            <Input
              type="text"
              name="editYear"
              value={editYear}
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
              handleDelete={this.deleteYear}
            />
          </div>
        </form>
      </>
    );
  }
}

export default EditYear;
