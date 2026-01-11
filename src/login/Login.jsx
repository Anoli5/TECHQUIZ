import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Enter valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const valid = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!valid) {
      setError("Wrong email or password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(valid));
    navigate("/beginner");
  };

  return (
    <div className="google-bg">
      <form className="google-card" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <p className="subtitle">Use your Google-style account</p>

        {error && <p className="error shake">{error}</p>}

        <div className="floating-input">
          <input type="email" required onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>

        <div className="floating-input">
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <NavLink to="/forgot" className="link">Forgot password?</NavLink>

        <button className="google-btn">Next</button>

        <p className="signup-text">
          New here? <NavLink to="/signup">Create account</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
