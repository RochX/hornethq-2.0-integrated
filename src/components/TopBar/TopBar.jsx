import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./TopBar.css";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const appBarColor = "#333333";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    // Optionally, add redirection to login page
    navigate("/login");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: appBarColor }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          <Link to="/">
            <img
              src="https://hornethq.kzoo.edu/Student/K-Images/HornetHQ5.svg"
              alt="Hornet HQ"
              style={{ maxHeight: "80px" }}
            />
          </Link>
        </Typography>

        <div>
          <IconButton
            component={Link}
            to="/profile"
            color="inherit"
            style={{ marginRight: "10px" }}
          >
            <FaUser /> Profile
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout}>
            <BiLogOut /> Sign Out
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
