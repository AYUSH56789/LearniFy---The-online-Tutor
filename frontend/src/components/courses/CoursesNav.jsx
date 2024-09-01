import React from 'react'
import "./CoursesNav.css" 
import { NavLink } from 'react-router-dom'

function CoursesNav() {
  return (
    <div className="navbar-container">
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
  )
}

export default CoursesNav
