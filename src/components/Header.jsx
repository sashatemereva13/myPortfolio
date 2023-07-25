import React, { useEffect, useState, useContext } from "react";
import "./header.css";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import LightSwitch from "./LightSwitch";
import { ThemeContext } from "../App";

import BackgroundAudio from "../components/BackgroundAudio.jsx";
import backgroundAudio from "/audio/background_music.mp3";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    animateScroll.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      easing: "easeOutQuad",
    });
  };

  return (
    <>
      {windowWidth > 750 ? (
        <DesktopHeader handleScrollToSection={handleScrollToSection} />
      ) : (
        <PhoneHeader handleScrollToSection={handleScrollToSection} />
      )}
    </>
  );
};

const DesktopHeader = ({ handleScrollToSection }) => {
  // Use the useContext hook to get the theme and toggleTheme function
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`header desktop-header ${theme}`}>
      <nav className="nav_container">
        <div className="nav_menu">
          <h3 className="logo">
            <span className="logo-text-animation">S</span>
            <span className="logo-text-animation">a</span>
            <span className="logo-text-animation">s</span>
            <span className="logo-text-animation">h</span>
            <span className="logo-text-animation">a</span>
            <span className="logo-text-animation">&nbsp;</span>
            <span className="logo-text-animation">U</span>
            <span className="logo-text-animation">I</span>
            <span className="logo-text-animation">/</span>
            <span className="logo-text-animation">U</span>
            <span className="logo-text-animation">X</span>
          </h3>
          <ul className="nav_list">
            <li className="nav_item">
              <ScrollLink
                to="memoji"
                className="nav_link"
                smooth={true}
                duration={500}
              >
                Home
              </ScrollLink>
            </li>

            <li className="nav_item">
              <ScrollLink
                to="skills"
                className="nav_link"
                smooth={true}
                duration={500}
                onClick={() => handleScrollToSection("skills")}
              >
                Skills
              </ScrollLink>
            </li>

            <li className="nav_item">
              <ScrollLink
                to="projects"
                className="nav_link"
                smooth={true}
                duration={500}
                onClick={() => handleScrollToSection("projects")}
              >
                Projects
              </ScrollLink>
            </li>

            <li className="nav_item">
              <ScrollLink
                to="contact"
                className="nav_link"
                smooth={true}
                duration={500}
                onClick={() => handleScrollToSection("contact")}
              >
                Contacts
              </ScrollLink>
            </li>

            <li className="nav_item">
              <ScrollLink
                to="about"
                className="nav_link"
                smooth={true}
                duration={500}
                onClick={() => handleScrollToSection("about")}
              >
                About Me
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="toggles">
        <BackgroundAudio audio={backgroundAudio} />
        <LightSwitch onChange={toggleTheme} checked={theme === "light"} />
      </div>
    </header>
  );
};

const PhoneHeader = ({ handleScrollToSection }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Use the useContext hook to get the theme and toggleTheme function
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header phone-header ${theme}`}>
      <nav className={`nav_container ${isMenuOpen ? "open" : ""}`}>
        <div className="nav_menu">
          <h3 className="logo">Sasha UI/UX</h3>
          <div className="toggles">
            <LightSwitch onChange={toggleTheme} checked={theme === "light"} />

            <div
              className={`burger-icon ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="navigation-links-small">
            <ScrollLink
              to="memoji"
              className="nav_link"
              smooth={true}
              duration={500}
              onClick={() => {
                handleScrollToSection("home");
                toggleMenu();
              }}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="skills"
              className="nav_link"
              smooth={true}
              duration={500}
              onClick={() => {
                handleScrollToSection("skills");
                toggleMenu();
              }}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              className="nav_link"
              smooth={true}
              duration={500}
              onClick={() => {
                handleScrollToSection("projects");
                toggleMenu();
              }}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              className="nav_link"
              smooth={true}
              duration={500}
              onClick={() => {
                handleScrollToSection("contact");
                toggleMenu();
              }}
            >
              Contacts
            </ScrollLink>
            <ScrollLink
              to="about"
              className="nav_link"
              smooth={true}
              duration={500}
              onClick={() => {
                handleScrollToSection("about");
                toggleMenu();
              }}
            >
              About Me
            </ScrollLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
