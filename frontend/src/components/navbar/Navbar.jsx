import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import flamingoLogo from "./flamingo_logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Check if the current route is one of the resources' child routes
  const isResourceActive = ["/ielts", "/pte", "/spoken-english", "/duolingo"].includes(location.pathname);

  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <img src={flamingoLogo} alt="flamingo" />
        </div>
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
          &#9776;
        </div>
        <div className={`menu-links ${menuOpen ? 'active' : ''}`}>
          <ul><NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></ul>
          <ul><NavLink to="/courses" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Courses</NavLink></ul>
          <ul className='dropdown'>
            <span id='rsc' className={isResourceActive ? 'active' : ''}
            style={{color: isResourceActive ? '#F53DEE' : '#262626'}}>
              Resources <span className='arrow'>▼</span></span>
            <div className="dropdown-content">
              <NavLink to="/ielts" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>IELTS</NavLink>
              <NavLink to="/pte" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>PTE</NavLink>
              <NavLink to="/spoken-english" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Spoken English</NavLink>
              <NavLink to="/duolingo" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Duolingo</NavLink>
            </div>
          </ul>
          <ul><NavLink to="/mocktest" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Mock Test</NavLink></ul>
          <div className="login-signup">
            <NavLink to="/login" onClick={closeMenu}><button className='btn1'>Login</button></NavLink>
            <NavLink to="/signup" onClick={closeMenu}><button className='btn2'>Signup</button></NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
