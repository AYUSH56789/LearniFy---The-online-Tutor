// components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUser,
  FaClipboardList,
  FaStickyNote,
  FaKey,
} from "react-icons/fa";
import "./Sidebar.css"; // Sidebar-specific styles

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 style={{ fontFamily: "DM Sans", fontWeight: 400 }}>Learnify-The Online Tutor</h2>
        <p style={{fontFamily:"Poppins" , fontWeight :300}}>Learnify123@gmail.com</p>
      </div>
      <ul
        className="sidebar-menu"
        style={{ fontFamily: "DM Sans", fontWeight: 400 }}
      >
        <li>
          <Link to="/dashboard">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/course">
            <FaBook /> Course
          </Link>
        </li>
        <li>
          <Link to="/students">
            <FaUser /> Students
          </Link>
        </li>
        <li>
          <Link to="/mock-test">
            <FaClipboardList /> Mock-Test
          </Link>
        </li>
        <li>
          <Link to="/notes">
            <FaStickyNote /> Notes
          </Link>
        </li>
        <li>
          <Link to="/change-password">
            <FaKey /> Change Password
          </Link>
        </li>
      </ul>
      <button className="logout-btn">Logout</button>
    </div>
  );
}

export default Sidebar;
