import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useDeleteEmployeeMutation } from "../api-client";
import "../styles/ListItem.css";

const ListItem = ({
  id,
  name,
  empId,
  joiningDate,
  role,
  status,
  experience,
}) => {
  const [deleteEmployee, { isLoading }] = useDeleteEmployeeMutation();

  const handleDelete = () => {
    console.log(`Delete ${id}`);
    deleteEmployee(id);
  };

  const handleEdit = () => {
    console.log(`Edit ${id}`);
  };

  return (
    <div className="list-item">
      <div className="field">{name}</div>
      <div className="field">{empId}</div>
      <div className="field">{joiningDate}</div>
      <div className="field">{role}</div>
      <div className="field status">
        <span className={`span-status ${status}`}>{status}</span>
      </div>
      <div className="field">{experience}</div>
      <div className="field icons">
        <MdOutlineDelete className="delete-icon" onClick={handleDelete} />
        <MdOutlineEdit className="edit-icon" onClick={handleEdit} />
      </div>
    </div>
  );
};

export default ListItem;
