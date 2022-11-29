import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../image/innoqb-logo.png";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineShopping,
} from "react-icons/ai";
import { IoPersonOutline, IoPersonCircleOutline } from "react-icons/io5";
import "./navbar.css";

function Navbar() {
  const { total } = useSelector((state) => state.items);
  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, []);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="" />
        <AiOutlineMenu className="menu-icons" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search the store" />
        <div className="searct-icon">
          <AiOutlineSearch className="menu-icons" />
        </div>
      </div>
      <div className="button-group">
        <div className="button menu-hidden">
          <AiOutlineHeart />
          <p>Wish Lists</p>
        </div>
        <div className="button ">
          {width <= "400" ? (
            <IoPersonCircleOutline className="menu-icons" />
          ) : (
            <IoPersonOutline />
          )}
          <p>Sign in</p>
        </div>
        <div className="button">
          {width <= "400" ? (
            <AiOutlineShopping className="menu-icons" />
          ) : (
            <AiOutlineShoppingCart />
          )}
          <p>Cart</p>
          <div className="total-circle">{total}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
