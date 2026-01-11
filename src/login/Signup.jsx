import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const isStrongPassword = (pass) =>
    pass.length >= 6 && /[A-Z]/.test(pass) && /[0-9]/.test(pass);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("All fields are required");
      return;
    }

    if (!isStrongPassword(form.password)) {
      setError("Password must include 1 uppercase & 1 number");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === form.email)) {
      setError("User already exists");
      return;
    }

    users.push({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <FaUser />
          <input
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="input-group">
          <FaEnvelope />
          <input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="input-group">
          <FaLock />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="input-group">
          <FaLock />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
