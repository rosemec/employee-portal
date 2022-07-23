import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDeleteEmployeeMutation } from "../api-client";
import "../styles/ListItem.css";

const ListItem = (props) => {
  const [deleteEmployee, { isLoading }] = useDeleteEmployeeMutation();
  const navigate = useNavigate();
  const handleDelete = (e) => {
    e.stopPropagation();
    console.log(`Delete ${props.id}`);
    props.popDelete(props.id);
    // deleteEmployee(props.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log(`Edit ${props.id}`);
    navigate(`/edit/${props.id}`);
  };

  return (
    <div
      className="list-item"
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      <div className="field">{props.name}</div>
      <div className="field">{props.empId}</div>
      <div className="field">{props.joiningDate}</div>
      <div className="field">{props.role}</div>
      <div className="field status">
        <span className={`span-status ${props.status}`}>{props.status}</span>
      </div>
      <div className="field">{props.experience}</div>
      <div className="field icons">
        <MdOutlineDelete
          className="delete-icon"
          onClick={(e) => {
            handleDelete(e);
          }}
        />
        <MdOutlineEdit
          className="edit-icon"
          onClick={(e) => {
            handleEdit(e);
          }}
        />
      </div>
    </div>
  );
};

export default ListItem;
