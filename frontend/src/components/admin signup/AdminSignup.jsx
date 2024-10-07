import React from "react";
import "./AdminSignup.css";
import {Link} from "react-router-dom"

function AdminSignup() {
  return (
    <div className="admin-signup-container">
      <div className="admin-signup-form">
        <h2 style={{ fontFamily: "DM Sans" }}>Admin Sign-Up</h2>
        <form>
          <input type="text" placeholder="Enter Admin Name" required />
          <input type="email" placeholder="Enter Admin Email" required />
          <input type="password" placeholder="Enter Admin Password" required />
          <button type="submit" style={{ fontFamily: "Poppins" }}>
            Admin Sign Up
          </button>
        </form>
        <div className="signup-footer">
          <p style={{ fontFamily: "poppins" }}>
            For User SignUp <Link to="/signup">Click here</Link>
          </p>
        </div>
      </div>
      <div className="admin-signup-image">
        <img src="signupimg.jpg" alt="Signup Illustration" />
      </div>
    </div>
  );
}

export default AdminSignup;
