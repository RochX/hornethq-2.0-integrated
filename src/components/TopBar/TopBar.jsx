import "./TopBar.css";
import React from "react";
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'
import Cart from "./Cart";
import { AiOutlineShoppingCart } from 'react-icons/ai'


function TopBar({ carItems, addToCart }) {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <>
      <div className="topnav">
        <a href="">
          <img
            src="https://hornethq.kzoo.edu/Student/K-Images/HornetHQ5.svg"
            alt="Hornet HQ"
            width="300"
            height="80"
          />
        </a>
        <a className="TopBar" href="">
          <FaUser style={{ color: 'orange' }} /> Profile
        </a>
        <a className="TopBar" href="">
          <BiLogOut style={{ color: 'orange' }} /> Sign Out
        </a>
        <a className="TopBar" onClick={onClick} >
          <AiOutlineShoppingCart style={{ color: 'orange' }}>
          </AiOutlineShoppingCart> Cart
        </a>

      </div>
      {showResults ? <Cart carItems={carItems}></Cart> : null}
    </>
  );
}

export default TopBar;
