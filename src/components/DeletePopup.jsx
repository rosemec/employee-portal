import React from "react";
import Button from "./Button";
import "../styles/DeletePopup.css";

const DeletePopup = ({ downDelete, confirmDelete }) => {
  return (
    <div className="popup">
      <div className="delete-popup">
        <div className="content">
          <h2>Are you sure?</h2>
          <p>Do you really want to delete employee ?</p>
        </div>
        <div className="delete-buttons">
          <Button
            label="Confirm"
            className="confirmb"
            handleClick={confirmDelete}
          />
          <Button label="Cancel" className="cancelb" handleClick={downDelete} />
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
