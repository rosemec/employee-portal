import "../styles/NavMain.css";
import logo from "../assets/kv logo.png";
import icon from "../assets/List.png";
import { Link } from "react-router-dom";

const NavMain = () => {
  return (
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
  );
};

export default NavMain;
