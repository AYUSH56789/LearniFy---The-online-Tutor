import React, { useEffect, useRef, useState } from 'react';
import './CoursesNav.css';
import { NavLink } from 'react-router-dom';

function CoursesNav() {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track last scroll position
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      const mainNavbar = document.querySelector('.main-nav'); // Assuming your main navbar has this class
      const mainNavbarHeight = mainNavbar ? mainNavbar.offsetHeight : 0;

      const currentScrollTop = window.scrollY;

      if (navbar && currentScrollTop >= navbar.offsetTop - mainNavbarHeight) {
        // Check if scrolling down
        if (currentScrollTop > lastScrollTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else {
        setIsSticky(false);
      }

      // Update last scroll position
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]); // Dependency on lastScrollTop

  return (
    <div ref={navbarRef} className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar">
        <NavLink to="/" exact activeClassName="active" className="nav-item">
          All
        </NavLink>
        <NavLink to="/" activeClassName="active" className="nav-item">
          English Spoken
        </NavLink>
        <NavLink to="/" activeClassName="active" className="nav-item">
          IELTS
        </NavLink>
        <NavLink to="/" activeClassName="active" className="nav-item">
          General IELTS
        </NavLink>
        <NavLink to="/" activeClassName="active" className="nav-item">
          PTE Skill
        </NavLink>
        <NavLink to="/" activeClassName="active" className="nav-item">
          Offline Classes
        </NavLink>
        <NavLink to="/" activeClassName="active" className="nav-item">
          Grammar
        </NavLink>
        <NavLink to="/" activeClassName="active" className="nav-item">
          Vocabulary
        </NavLink>
      </nav>
    </div>
  );
}

export default CoursesNav;
