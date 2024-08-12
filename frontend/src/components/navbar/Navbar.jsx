import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import flamingoLogo from "./flamingo_logo.png";

function Navbar() {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
            <img src={flamingoLogo} alt="flamingo" />
        </div>
        <div className='menu-links'>
            <ul><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></ul>
            <ul><NavLink to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>Courses</NavLink></ul>
            <ul className='dropdown'>
                <NavLink to="" className={({ isActive }) => (isActive ? 'active' : '')}>Resources <span className='arrow'>▼</span></NavLink>
                <div className="dropdown-content">
                    <NavLink to="/ielts" className={({ isActive }) => (isActive ? 'active' : '')}>IELTS</NavLink>
                    <NavLink to="/pte" className={({ isActive }) => (isActive ? 'active' : '')}>PTE</NavLink>
                    <NavLink to="/spoken-english" className={({ isActive }) => (isActive ? 'active' : '')}>Spoken English</NavLink>
                    <NavLink to="/duolingo" className={({ isActive }) => (isActive ? 'active' : '')}>Duolingo</NavLink>
                </div>
            </ul>
            <ul><NavLink to="/mocktest" className={({ isActive }) => (isActive ? 'active' : '')}>Mock Test</NavLink></ul>
        </div>
        <div className='login-btn'>
            <NavLink to="/login"><button className='btn1'>Login</button></NavLink>
            <NavLink to="/signup"><button className='btn2'>Signup</button></NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
