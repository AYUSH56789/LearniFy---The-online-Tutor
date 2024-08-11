import React from 'react';
import { Link } from 'react-router-dom';
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
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/courses">Courses</Link></ul>
            <ul className='dropdown'>
                <Link to="/resources">Resources <span className='arrow'>▼</span></Link>
                <div className="dropdown-content">
                    <Link to="/resources/ielts">IELTS</Link>
                    <Link to="/resources/pte">PTE</Link>
                    <Link to="/resources/spoken-english">Spoken English</Link>
                    <Link to="/resources/duolingo">Duolingo</Link>
                </div>
            </ul>
            <ul><Link to="/mocktest">Mock Test</Link></ul>
        </div>
        <div className='login-btn'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Signup</button></Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
