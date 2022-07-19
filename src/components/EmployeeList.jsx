import Select from "./Select";
import ListItem from "./ListItem";
import "../styles/EmployeeList.css";
import { Link, useNavigate } from "react-router-dom";
import { useGetEmployeesQuery } from "../api-client";
import NavMain from "../NavMain";

const EmployeeList = () => {
  const { data, error, isLoading } = useGetEmployeesQuery();
  const empList = data;
  const navigate = useNavigate();
  const displayEmployee = (id) => {
    navigate(`/list/${id}`);
  };
  return (
    <div className="app">
      <NavMain />
      <div className="emp-main">
        <div className="heading">
          <h1>Employee List</h1>
          <Select
            label="Filter By"
            options={[
              { key: 1, value: "name", name: "Employee Name" },
              { key: 2, value: "empId", name: "Employee ID" },
              { key: 3, value: "joiningDate", name: "Joining Date" },
              { key: 4, value: "role", name: "Role" },
              { key: 5, value: "status", name: "Status" },
              { key: 6, value: "experience", name: "Experience" },
            ]}
          />
          <Link to="/create" className="create-emp">
            <span className="create-emp-span">+</span>
            <div>Create Employee</div>
          </Link>
        </div>
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            Loading...
          </div>
        ) : (
          <div className="emp-list">
            <div className="list-item head-fields">
              <div className="field">Employee Name</div>
              <div className="field">Employee ID</div>
              <div className="field">Joining Date</div>
              <div className="field">Role</div>
              <div className="field">Status</div>
              <div className="field">Experience</div>
              <div className="field icons">Action</div>
            </div>
            {empList.map((listItem) => {
              return (
                <ListItem
                  key={listItem.id}
                  name={listItem.name}
                  empId={listItem.empId}
                  joiningDate={listItem.joiningDate}
                  role={listItem.role}
                  status={listItem.status}
                  experience={listItem.experience}
                  id={listItem.id}
                  onClick={displayEmployee}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
