import { Outlet } from "react-router-dom";
import "./Layout.css";
import BreadCrumbNav from "./components/BreadCrumbNav/BreadCrumbNav";
import TopBar from './components/TopBar/TopBar'
import React, { useState } from 'react';

function Layout() {
  const [carItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Copy the current items in the cart and add the new item
    setCartItems([...carItems, product]);
  };
  return (
    <div className="layout">
      <div className="sidebar">
        sidebar
      </div>
      <div className="main">
        <div className="topbar">
          <TopBar addToCart={addToCart} carItems={carItems}></TopBar>
        </div>
        <div className="breadcrumb">
          <BreadCrumbNav />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;