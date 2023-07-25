import React from "react";
import { Link } from "react-router-dom";
import "./myProjects.css";
import StylingProject from "../imgs/StylingProject2.svg";
import GameProject from "../imgs/GameProject2.svg";
import UIUXproject from "../imgs/UIUXproject2.svg";

const MyProjects = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="my-projects">
      <h1>
        <span className="myprojects-letter-animation">M</span>
        <span className="myprojects-letter-animation">Y</span>
        <span>&nbsp;</span>
        <span className="myprojects-letter-animation">P</span>
        <span className="myprojects-letter-animation">R</span>
        <span className="myprojects-letter-animation">O</span>
        <span className="myprojects-letter-animation">J</span>
        <span className="myprojects-letter-animation">E</span>
        <span className="myprojects-letter-animation">C</span>
        <span className="myprojects-letter-animation">T</span>
        <span className="myprojects-letter-animation">S</span>
      </h1>
      <p>For the best experience, use your laptop/computer.</p>
      <div className="projects-flex">
        <div className="project1">
          <Link to="/match3">
            <img
              src={GameProject}
              alt="a link that would take you to the project I completed in HTML/CSS/JS, focused on styling"
              className="Project"
            />
          </Link>
        </div>
        <div className="project2">
          <Link to="https://www.sashauiux.shop">
            <img
              src={StylingProject}
              alt="a link that would take you to a match-3 game built in react.js"
              className="Project"
            />
          </Link>
        </div>
        <div className="project3">
          <Link to="/uiuxproject">
            <img
              src={UIUXproject}
              alt="a link that would take you to the project focused on the user experience and user interface"
              className="Project"
              onClick={scrollToTop}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
