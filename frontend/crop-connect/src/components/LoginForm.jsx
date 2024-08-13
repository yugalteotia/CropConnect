import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "../css/LoginForm.css";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email });
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="login-carousel-container">
      <div className="login-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
        <div className="login-form-footer">
          <a href="/forgot-password">Forgot password?</a>
          <p>
            New to CinePulse? <a href="/signup">Sign up now.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
