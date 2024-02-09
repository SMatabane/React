import React from "react";
import Backgound from "../images/41831_hd.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Backgound })` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          At Scoops and Smiles, we believe that life is sweeter with a scoop of ice 
          cream in hand. Nestled in the heart of Phuthaditjhaba, our shop is a cozy haven
          where friends and families gather to create cherished memories over creamy delights.
        </p>

        <p>
        Our journey began with a simple passion for crafting the finest ice cream using the 
          freshest ingredients and time-honored recipes. From classic flavors that evoke
          nostalgia to innovative creations that tantalize your taste buds, each scoop is a labor of
          love, meticulously churned to perfection.
          
        </p>
      </div>
    </div>
  );
}

export default About;