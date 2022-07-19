import React from "react";
import Form from "./Form";
import "../styles/CreateEmployee.css";

const CreateEmployee = ({ update }) => {
  return (
    <div className="emp-main">
      <div className="heading">
        {update ? <div>Update Employee</div> : <h1>Create Employee</h1>}
      </div>
      <div className="emp-form">
        <Form />
      </div>
    </div>
  );
};

export default CreateEmployee;
