import React from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2 style={{ fontFamily: "DM Sans" }}>Admin Login</h2>
        <form>
          <input
            type="email"
            placeholder="Enter Admin Email"
            style={{ fontFamily: "poppins" }}
            required
          />
          <input type="password" placeholder="Enter Admin Password" required />
          <button
            type="submit"
            style={{ fontFamily: "poppins", fontWeight: 500 }}
          >
            Admin Log In
          </button>
        </form>
        <div className="admin-login-footer">
          <p style={{ fontFamily: "poppins" }}>
            Forgot Password? <a href="#">Click Here</a>
          </p>
          <p style={{ fontFamily: "poppins" }}>
            Don't have an account? <a href="#">Sign up</a>
          </p>
          <p style={{ fontFamily: "poppins" }}>
            Return to User Login <Link to="/login">User Login</Link>
          </p>
        </div>
      </div>
      <div className="admin-signup-image">
        <img src="adminsignupimg.jpg" alt="Admin Login Illustration" />
      </div>
    </div>
  );
}

export default AdminLogin;
