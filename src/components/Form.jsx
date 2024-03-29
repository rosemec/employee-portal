import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Select from "./Select";
import "../styles/Form.css";
import {
  useAddNewEmployeeMutation,
  useGetEmployeeQuery,
  useUpdateEmployeeMutation,
} from "../api-client";
import { useNavigate } from "react-router-dom";

const Form = ({ update, data }) => {
  const initialState = data
    ? data
    : {
        name: "",
        empId: "",
        joiningDate: "",
        email: "",
        experience: "",
        address: "",
        idProof: "",
        role: "",
        status: "",
      };
  const [empData, setEmpData] = useState(initialState);

  const [addNewEmployee] = useAddNewEmployeeMutation();
  const navigate = useNavigate();
  const [updateEmployee] = useUpdateEmployeeMutation();

  const handleChange = (name, value) => {
    setEmpData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewEmployee(empData).unwrap();
    setEmpData({
      name: "",
      empId: "",
      joiningDate: "",
      email: "",
      experience: "",
      address: "",
      idProof: "",
      role: "",
      status: "",
    });
    navigate("/list");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateEmployee({ empData: empData, id: data.id }).unwrap();
    setEmpData({
      name: "",
      empId: "",
      joiningDate: "",
      email: "",
      experience: "",
      address: "",
      idProof: "",
      role: "",
      status: "",
    });
    navigate("/list");
  };

  const formFields = [
    {
      key: 1,
      label: "Employee Name",
      type: "text",
      placeholder: "Employee Name",
      name: "name",
    },
    {
      key: 2,
      label: "Employee ID",
      type: "text",
      placeholder: "Employee ID",
      name: "empId",
    },
    {
      key: 3,
      label: "Joining Date",
      type: "date",
      placeholder: "Joining Date",
      name: "joiningDate",
    },
    {
      key: 4,
      label: "Employee Email",
      type: "email",
      placeholder: "Employee Email",
      name: "email",
    },
    {
      key: 5,
      label: "Experience",
      type: "text",
      placeholder: "Experience",
      name: "experience",
    },
    {
      key: 6,
      label: "Address",
      type: "text",
      placeholder: "Address",
      name: "address",
    },
    {
      key: 7,
      label: "Upload ID Proof",
      type: "file",
      name: "idProof",
    },
  ];
  return (
    <form>
      <div className="details">
        {formFields.map((item) => {
          return (
            <div className="data" key={item.key}>
              <InputField
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                onChange={handleChange}
                name={item.name}
                value={empData[item.name]}
              />
            </div>
          );
        })}
        <div className="data">
          <Select
            label="Role"
            options={[
              { key: 1, value: "UI Engineer", name: "UI Engineer" },
              { key: 2, value: "QA", name: "QA" },
              { key: 3, value: "Full Stack", name: "Full Stack" },
              { key: 4, value: "Devops", name: "Devops" },
            ]}
            onChange={handleChange}
            name="role"
            value={empData.role}
          />
        </div>
        <div className="data">
          <Select
            label="Status"
            options={[
              { key: 1, value: "Active", name: "Active" },
              { key: 2, value: "Inactive", name: "Inactive" },
              { key: 3, value: "Probation", name: "Probation" },
            ]}
            onChange={handleChange}
            name="status"
            value={empData.status}
          />
        </div>
      </div>
      <div className="buttons">
        <Button
          className="createb"
          label={update ? "Edit" : "Create"}
          handleClick={update ? handleUpdate : handleSubmit}
        />
        <Button
          className="cancelb"
          label="Cancel"
          handleClick={() => {
            navigate("/list");
          }}
        />
      </div>
    </form>
  );
};

export default Form;
