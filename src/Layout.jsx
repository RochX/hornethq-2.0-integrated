import { Outlet } from "react-router-dom";
import "./Layout.css";
import BreadCrumbNav from "./components/BreadCrumbNav/BreadCrumbNav";
import TopBar from './components/TopBar/TopBar'
import React, { useState } from 'react';

function Layout() {
  const carItems = [
    {
      title: "Intro to Sleeping",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Fall"],
      picUrl:
        "https://images.pexels.com/photos/18379232/pexels-photo-18379232/free-photo-of-wheat-on-a-field-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      title: "Underwater Basket Weaving 101",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Spring"],
      picUrl:
        "https://images.pexels.com/photos/17728880/pexels-photo-17728880/free-photo-of-landscape-water-field-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Alien Communication for Earthlings",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Spring"],
      picUrl:
        "https://images.pexels.com/photos/18260982/pexels-photo-18260982/free-photo-of-boys-riding-bicycles-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "How to Become a Professional Bed Tester",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Spring", "Fall"],
      picUrl:
        "https://images.pexels.com/photos/3135371/pexels-photo-3135371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "The Science of Spaghetti Splatter Dynamics",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Spring"],
      picUrl:
        "https://images.pexels.com/photos/18072294/pexels-photo-18072294/free-photo-of-woman-standing-by-atm-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [setCartItems] = useState([]);

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