import React, { useEffect, useState } from "react";
import "./Theme.css";

const Theme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("techquiz-theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("techquiz-theme", theme);
  }, [theme]);

  return (
    <div className="theme-page">
      <h1>Theme Settings</h1>
      <p>Customize your TechQuiz Pro experience</p>

      <div className="theme-cards">
        <div
          className={`theme-card ${theme === "light" ? "active" : ""}`}
          onClick={() => setTheme("light")}
        >
          🌞 Light Mode
        </div>

        <div
          className={`theme-card ${theme === "dark" ? "active" : ""}`}
          onClick={() => setTheme("dark")}
        >
          🌙 Dark Mode
        </div>
      </div>
    </div>
  );
};

export default Theme;
