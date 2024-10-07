import React from 'react'
import "./Signup.css" 
import {Link} from "react-router-dom" ;

function Signup() {
  return (
    <div className="signup-container">
    <div className="signup-form">
      <h2 style={{fontFamily:"DM Sans"}}>Sign-Up</h2>
      <form>
        <input type="text" placeholder="Enter Name" required />
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Enter Password" required />

        <button type="submit" style={{fontFamily:"Poppins"}} >Sign Up</button>
      </form>

    <div className="signup-footer">
      <p style={{fontFamily:"poppins"}}>For Admin SignUp <Link to="/admin-signup">Click here</Link> </p>
    </div>
    </div>
    <div className="signup-image">
      <img src="signupimg.jpg" alt="Signup Illustration" />
    </div>
  </div>
  )
}

export default Signup
