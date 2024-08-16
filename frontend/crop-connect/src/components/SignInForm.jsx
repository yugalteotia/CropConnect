import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import "../css/SignInForm.css";


const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      const data = { loginDTO: { email, password } };

      const result = await login(data);

      if (result.success) {
        if (result.userData.role === "FARMER")
          navigate("/farmer"); // Redirect on successful login
        else if (result.userData.role === "MERCHANT")
          navigate("/merchant")
      } else {
        alert(result.message); // Show error message from the backend
      }
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="login-page">
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
          
          <p>
            New to Crop Connect? <a href="/signup">Sign up now.</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignInForm;
