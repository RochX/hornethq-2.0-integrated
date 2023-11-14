// TopBar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CartDrop from './CartDrop';

function TopBar({ courseID }) {
  const appBarColor = '#333333';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const [cartDropActive, changeCartDrop] = useState(false);
  const handleCartDrop = () => {
    changeCartDrop((cartDropActive) => !cartDropActive);
  }

  return (
    <div style={{ position: 'relative' }}>
      <AppBar position="static" style={{ backgroundColor: appBarColor }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            <Link to="/">
              <img
                src="https://hornethq.kzoo.edu/Student/K-Images/HornetHQ5.svg"
                alt="Hornet HQ"
                style={{ maxHeight: '80px' }}
              />
            </Link>
          </Typography>

          <div>
            <IconButton
              onClick={handleCartDrop}
              color="inherit"
              style={{ marginRight: '10px' }}
            >
              <CartDrop courseID={courseID} cartDropActive={cartDropActive}></CartDrop>
            </IconButton>
            <IconButton component={Link} to="/profile" color="inherit">
              <FaUser /> Profile
            </IconButton>
            <IconButton color="inherit" onClick={handleLogout}>
              <BiLogOut /> Sign Out
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default TopBar;
