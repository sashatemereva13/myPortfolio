import React from "react";
import "./mySkills.css";
import skillsUiUx from "../imgs/UIUXskills.svg";
import skillsFrontEnd from "../imgs/FrontEndskills.svg";
import skillsSoft from "../imgs/SoftSkills.svg";

const MySkills = () => {
  return (
    <div className="skills-section">
      <h1 className="headingAnimation">
        <span className="myskills-letter-animation">M</span>
        <span className="myskills-letter-animation">Y</span>
        <span>&nbsp;</span>
        <span className="myskills-letter-animation">S</span>
        <span className="myskills-letter-animation">K</span>
        <span className="myskills-letter-animation">I</span>
        <span className="myskills-letter-animation">L</span>
        <span className="myskills-letter-animation">L</span>
        <span className="myskills-letter-animation">S</span>
      </h1>
      <div className="skillCircles">
        <img
          src={skillsFrontEnd}
          alt="my skills on the front development side"
          className="Front-End skill"
        />

        <img
          src={skillsUiUx}
          alt="my skills relating to the user experience and user interface"
          className="UIUXSkills skill"
        />

        <img
          src={skillsSoft}
          alt="my soft skills"
          className="Soft-Skills skill"
        />
      </div>
    </div>
  );
};

export default MySkills;
