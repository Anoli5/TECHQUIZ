// src/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import data from "./data"; // Import the quiz data

function HomePage() {
  const topics = Object.keys(data);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Choose a Quiz Topic</h1>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "0 auto" }}>
        {topics.map((topic) => (
          <Link
            key={topic}
            to={`/quiz/${topic}`} // Link to the /quiz/:topic route
            style={{
              margin: "10px 0",
              padding: "15px",
              borderRadius: "8px",
              background: "#7b50ff",
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.2em",
              fontWeight: "bold",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {topic} Quiz ({data[topic].length} Questions)
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;