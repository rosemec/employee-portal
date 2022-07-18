import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Select from "./Select";
import "../styles/Form.css";
import { useAddNewEmployeeMutation } from "../api-client";

const Form = () => {
  const [empData, setEmpData] = useState({
    name: "",
    id: "",
    joinDate: "",
    email: "",
    exp: "",
    address: "",
    idProof: "",
    role: "",
    status: "",
  });

  const [addNewEmployee, { isLoading }] = useAddNewEmployeeMutation();

  const handleChange = (name, value) => {
    console.log(name, value);
    setEmpData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(empData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //updateEmpList(empData);
    addNewEmployee(empData).unwrap();
    setEmpData({
      name: "",
      id: "",
      joinDate: "",
      email: "",
      exp: "",
      address: "",
      idProof: "",
      role: "",
      status: "",
    });
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
      name: "id",
    },
    {
      key: 3,
      label: "Joining Date",
      type: "date",
      placeholder: "Joining Date",
      name: "joinDate",
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
      name: "exp",
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
    <form onSubmit={(e) => handleSubmit(e)}>
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
              { key: 1, value: "Role1", name: "Role1" },
              { key: 2, value: "Role2", name: "Role2" },
              { key: 3, value: "Role3", name: "Role3" },
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
        <Button className="createb" label="Create" handleClick={() => {}} />
        <Button className="cancelb" label="Cancel" handleClick={() => {}} />
      </div>
    </form>
  );
};

export default Form;
