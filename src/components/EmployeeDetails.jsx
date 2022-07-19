import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/EmployeeList.css";
import "../styles/EmployeeDetails.css";

const EmployeeDetails = () => {
  const data = {
    name: "Vishal M",
    empId: "E34656767",
    joiningDate: "2022-07-25",
    role: "Full Stack",
    status: "Active",
    exp: "2 Years",
    address: "No:C-9, T.V.K Industrial Estate, Kerala 600032",
    idProof: "",
  };
  return (
    <div className="emp-main">
      <div className="heading">
        <h1>Employee Details</h1>
        <Link to="/create" className="create-emp edit-emp">
          <span className="create-emp-span">
            <MdOutlineEdit />
          </span>
          <div>Edit</div>
        </Link>
      </div>
      <div className="emp-details">
        <div className="emp-details-column">
          <div className="emp-details-attribute">Employee Name</div>
          <div className="emp-details-attribute">{data.name}</div>
        </div>
        <div className="emp-details-column">
          <div className="emp-details-attribute">Employee ID</div>
          <div className="emp-details-attribute">{data.empId}</div>
        </div>
        <div className="emp-details-column">
          <div className="emp-details-attribute">Joining Date</div>
          <div className="emp-details-attribute">{data.joiningDate}</div>
        </div>
        <div className="emp-details-column">
          <div className="emp-details-attribute">Role</div>
          <div className="emp-details-attribute">{data.role}</div>
        </div>
        <div className="emp-details-column">
          <div className="emp-details-attribute">Status</div>
          <div className={`emp-details-attribute ${data.status} span-status`}>
            {data.status}
          </div>
        </div>
        <div className="emp-details-column">
          <div className="emp-details-attribute">Experience</div>
          <div className="emp-details-attribute">{data.experience}</div>
        </div>
        <hr style={{ width: "100%", margin: "10px" }} />
        <div className="emp-details-column">
          <div className="emp-details-attribute">Address</div>
          <div className="emp-details-attribute">{data.address}</div>
        </div>
        <div className="emp-details-column">
          <div className="emp-details-attribute">{data.idProof}</div>
          <div className="emp-details-attribute">""</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
