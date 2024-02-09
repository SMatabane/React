import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/back.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Scoops & Smiles </h1>
        <p> Indulge in Scoops of Happiness</p>
        
          <button> ORDER NOW </button>
        
      </div>
    </div>
  );
}

export default Home;