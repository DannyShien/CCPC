import React from "react";
import "./CreateFolder.css";
import Input from "../input/Input";
import Button from "../button/Button";

const CreateFolder = ({ submitNewFolder, folderName, handleInputChange }) => {
  return (
    <>
      <form className="videoCenterForm" onSubmit={submitNewFolder}>
        <label htmlFor="create">Create Folder</label>
        <Input
          type="text"
          formId="create"
          name="folderName"
          value={folderName}
          style={{ width: "35%" }}
          handleInput={handleInputChange}
        />
        <Button type="submit" text="Create Folder" style={{ width: "12%" }} />
      </form>
    </>
  );
};

export default CreateFolder;
