import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItemCount }) => {
  return (
    <div id="header">
      <div>
        <h1 style={{ color: "#FFC107", fontSize: "45px" }}>FoodHub</h1>
      </div>
      <div className="header-components">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart">
          Your Products <span>({cartItemCount})</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
