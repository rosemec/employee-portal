import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import "../styles/ListItem.css";

const ListItem = ({ name, id, joinDate, role, status, exp }) => {
  return (
    <div className="list-item">
      <div className="field">{name}</div>
      <div className="field">{id}</div>
      <div className="field">{joinDate}</div>
      <div className="field">{role}</div>
      <div className="field status">
        <span className={`span-status ${status}`}>{status}</span>
      </div>
      <div className="field">{exp}</div>
      <div className="field icons">
        <MdOutlineDelete className="delete-icon" />
        <MdOutlineEdit className="edit-icon" />
      </div>
    </div>
  );
};

export default ListItem;
