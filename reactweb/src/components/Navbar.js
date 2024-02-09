import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

import "../styles/Navcss.css";

function Navbar() {
  
  return (
    <div className="navbar">
      <div className="leftSide" >
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/item"> Items </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/item"> Items </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        
      </div>
    </div>
  );
}

export default Navbar;