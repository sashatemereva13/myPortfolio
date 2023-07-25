import React from "react";

import Header from "./components/Header.jsx";
import Memoji from "./components/Memoji.jsx";
import MySkills from "./components/MySkills.jsx";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe.jsx";
import AboutMe from "./components/AboutMe.jsx";
import FooterNav from "./components/FooterNav";

import styles from "./App.module.css";
import "./lightDarkThemes.css";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  // Use useEffect to update the class when the theme changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={styles.container}>
        <div className="App">
          <Header />
          <main className="main">
            <section id="memoji">
              <Memoji />
            </section>
            <section id="skills">
              <MySkills />
            </section>
            <section id="projects">
              <MyProjects />
            </section>
            <section id="contact">
              <ContactMe />
            </section>
            <section id="about">
              <AboutMe />
            </section>
          </main>
          <FooterNav />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
