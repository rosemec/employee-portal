import React from "react";
import Form from "./Form";
import "../styles/CreateEmployee.css";
import NavMain from "../NavMain";
import { useParams } from "react-router-dom";

const CreateEmployee = ({ update }) => {
  return (
    <div className="app">
      <NavMain />
      <div className="emp-main">
        <div className="heading">
          {update ? <h1>Update Employee</h1> : <h1>Create Employee</h1>}
        </div>
        <div className="emp-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
