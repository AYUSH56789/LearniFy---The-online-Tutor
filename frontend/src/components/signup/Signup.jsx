import React from 'react'
import "./Signup.css" 
function Signup() {
  return (
    <div className="signup-container">
    <div className="signup-form">
      <h2>Sign-Up</h2>
      <form>
        <input type="text" placeholder="Enter Name" required />
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Enter Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    <div className="signup-image">
      <img src="signupimg.jpg" alt="Signup Illustration" />
    </div>
  </div>
  )
}

export default Signup
