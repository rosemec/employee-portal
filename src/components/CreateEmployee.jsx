import React from "react";
import Form from "./Form";
import "../styles/CreateEmployee.css";
import NavMain from "../NavMain";
import { useParams } from "react-router-dom";
import { useGetEmployeeQuery } from "../api-client";

const CreateEmployee = ({ update }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetEmployeeQuery(id, { skip: !id });
  return (
    <div className="app">
      <NavMain />
      <div className="emp-main">
        <div className="heading">
          {update ? <h1>Update Employee</h1> : <h1>Create Employee</h1>}
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="emp-form">
            <Form update={update} data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateEmployee;
