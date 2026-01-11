import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResultPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const score = state?.score || 0;
  const total = state?.total || 0;

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ fontSize: "45px", color: "#333" }}>🎉 Quiz Completed!</h1>

      <h2 style={{ marginTop: "20px", fontSize: "30px" }}>
        Your Score: <span style={{ color: "#007bff" }}>{score}</span> / {total}
      </h2>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          fontSize: "20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default ResultPage;
