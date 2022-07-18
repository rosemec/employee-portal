import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import "./styles/NavMain.css";
import logo from "./assets/kv logo.png";
import icon from "./assets/List.png";
import { Link } from "react-router-dom";
import employeeList from "./EmpList";

const NavMain = ({ create }) => {
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    setEmpList(employeeList);
  }, []);

  const updateEmpList = (emp) => {
    setEmpList((prev) => {
      return [...prev, emp];
    });
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Link to="/list">
          <img src={logo} alt="KeyValue Logo" className="logo" />
        </Link>
        <nav className="sidebar-emp-list">
          <Link to="/list">
            <div className="sidebar-list">
              <img src={icon} alt="Employee List" className="listImg" />
              <span className="emp-list-link">Employee List</span>
            </div>
          </Link>
        </nav>
      </div>
      {create ? <CreateEmployee /> : <EmployeeList />}
    </div>
  );
};

export default NavMain;
