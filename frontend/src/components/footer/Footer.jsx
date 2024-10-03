import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section address">
          <h2>Address</h2>
          <p>1st Floor, Tuition Market,</p>
          <p>Model Town, Ludhiana - 141001</p>
          <p>Phone: 9779945798</p>
          <p>Mail: learnify121@gmail.com</p>
        </div>
        <div className='logo-div'>
          <img className="foot-logo" src="/images/logo.png" alt="Flamingo" />
        </div>
        <div className="footer-section quick-links">
          <h2>Quick Link</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/mocktest">Mock-Test</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>COPYRIGHT © 2023 - Learnify | ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
