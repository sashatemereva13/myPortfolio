import React from "react";
import { Link as ScrollLink, animateScroll } from "react-scroll";

import "./footerNav.css";

const FooterNav = () => {
  const handleScrollToSection = (sectionId) => {
    animateScroll.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      easing: "easeOutQuad",
    });
  };

  return (
    <div className="footer-nav">
      <ul className="footer-list">
        <li className="footer-nav-item footer-nav-home">
          <ScrollLink
            to="memoji"
            className="nav_link_footer"
            smooth={true}
            duration={500}
          >
            Home
          </ScrollLink>
        </li>

        <li className="footer-nav-item footer-nav-skills">
          <ScrollLink
            to="skills"
            className="nav_link_footer"
            smooth={true}
            duration={500}
            onClick={() => handleScrollToSection("skills")}
          >
            Skills
          </ScrollLink>
        </li>

        <li className="footer-nav-item footer-nav-projects">
          <ScrollLink
            to="projects"
            className="nav_link_footer"
            smooth={true}
            duration={500}
            onClick={() => handleScrollToSection("projects")}
          >
            Projects
          </ScrollLink>
        </li>
        <li className="footer-nav-item footer-nav-contacts">
          <ScrollLink
            to="contact"
            className="nav_link_footer"
            smooth={true}
            duration={500}
            onClick={() => handleScrollToSection("contact")}
          >
            Contacts
          </ScrollLink>
        </li>

        <li className="footer-nav-item footer-nav-about">
          <ScrollLink
            to="about"
            className="nav_link_footer"
            smooth={true}
            duration={500}
            onClick={() => handleScrollToSection("about")}
          >
            About Me
          </ScrollLink>
        </li>
      </ul>
      <div className="footer_social">
        <div className=" footer-social-linkedin footer-nav-item">
          <a
            href="https://www.linkedin.com/in/sashatemereva"
            className="home_social-icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square"></i>
            LinkedIn
          </a>
        </div>
        <div className=" footer-social-mail footer-nav-item">
          <a
            href="mailto:sasha.uiux.13@gmail.com"
            className="home_social-icon"
            target="_blank"
          >
            <i className="bx bx-envelope"></i> Mail
          </a>
        </div>
        <div className=" footer-social-github footer-nav-item">
          <a
            href="https://github.com/sashatemereva13"
            className="home_social-icon"
            target="_blank"
          >
            <i className="bx bxl-github"></i> GitHub
          </a>
        </div>
      </div>
      <div className="footer-CV footer-nav-item">
        <a href="" download="myFile">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default FooterNav;
