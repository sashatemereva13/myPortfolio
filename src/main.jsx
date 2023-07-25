import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Match3Game from "./match3Main.jsx";
import UIUXProject from "./components/UIUXProject.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/match3" element={<Match3Game />} />
        <Route path="/uiuxproject" element={<UIUXProject />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
