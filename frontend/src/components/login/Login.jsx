import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom' ; 

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 style={{ fontFamily: "DM Sans" }}>Login</h2>
        <form>
          <input
            type="email"
            placeholder="Enter Email"
            style={{ fontFamily: "poppins" }}
            required
          />
          <input type="password" placeholder="Enter Password" required />
          <button
            type="submit"
            style={{ fontFamily: "poppins", fontWeight: 500 }}
          >
            Log In
          </button>
        </form>
        <div className="login-footer">
          <p style={{ fontFamily: "poppins" }}>
            Forgot Password? <a href="#">Click Here</a>
          </p>
          <p style={{ fontFamily: "poppins" }}>
            Don't have an account? <Link to="/signup">Click Here</Link>
          </p>
    
          <p style={{ fontFamily: "poppins" }}>
            Click Here For Admin Login <Link to="/admin-login">Admin Login</Link>
          </p>
        </div>
      </div>
      <div className="signup-image">
        <img src="signupimg.jpg" alt="Signup Illustration" />
      </div>
    </div>
  );
}

export default Login;
