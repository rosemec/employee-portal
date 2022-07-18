import Select from "./Select";
import ListItem from "./ListItem";
import "../styles/EmployeeList.css";
import { Link } from "react-router-dom";
import { useGetEmployeesQuery } from "../api-client";

const EmployeeList = () => {
  const { data, error, isLoading } = useGetEmployeesQuery();
  console.log(data);
  const empList = data;
  return (
    <div className="emp-main">
      <div className="heading">
        <h1>Employee List</h1>
        <Select
          label="Filter By"
          options={[
            { key: 1, value: "name", name: "Employee Name" },
            { key: 2, value: "id", name: "Employee ID" },
            { key: 3, value: "joinDate", name: "Joining Date" },
            { key: 4, value: "role", name: "Role" },
            { key: 5, value: "status", name: "Status" },
            { key: 6, value: "exp", name: "Experience" },
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
                id={listItem.id}
                joinDate={listItem.joiningDate}
                role={listItem.role}
                status={listItem.status}
                exp={listItem.experience}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
