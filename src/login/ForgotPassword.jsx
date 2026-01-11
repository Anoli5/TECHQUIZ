import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMsg("Email is required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);

    if (!exists) {
      setMsg("Email not registered");
      return;
    }

    setMsg("Password reset link sent (demo)");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="google-bg">
      <form className="google-card" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        {msg && <p className="error">{msg}</p>}

        <div className="floating-input">
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <button className="google-btn">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
