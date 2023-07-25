import React, { useContext } from "react";
import { ThemeContext } from "../App";

const LightSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="lightSwitch">
      <button onClick={toggleTheme} id="lightSwitch">
        <span>{theme === "light" ? "🌞" : "🌙"}</span>
      </button>
    </div>
  );
};

export default LightSwitch;
