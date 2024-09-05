import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Enter Email" style={{fontFamily:"poppins"}} required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit" style={{fontFamily:"poppins", fontWeight:500}}>Log In</button>
        </form>
        <div className="login-footer">
          <p>Forgot Password? <a href="#">Click Here</a></p>
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
      <div className="signup-image">
      <img src="signupimg.jpg" alt="Signup Illustration" />
    </div>
    </div>
  );
}

export default Login;
