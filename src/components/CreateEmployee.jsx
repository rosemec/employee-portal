import React from "react";
import Form from "./Form";
import "../styles/CreateEmployee.css";

const CreateEmployee = ({ updateEmpList }) => {
  return (
    <div className="emp-main">
      <div className="heading">
        <h1>Create Employee</h1>
      </div>
      <div className="emp-form">
        <Form updateEmpList={updateEmpList} />
      </div>
    </div>
  );
};

export default CreateEmployee;
