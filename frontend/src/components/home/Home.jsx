import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homepage-container">
      <div className="content-section">
        <h1
          className="main-heading"
          style={{ fontFamily: "DM Sans , sans-serif", fontWeight: 700 }}
        >
          Get Your <span className="highlight">Target Score</span> In just{" "}
          <span className="highlight">One Attempt</span>
        </h1>
        <p className="subheading" style={{fontFamily:"Poppins" , fontWeight:300}}>TOP IELTS AND PTE COACHING IN THE WORLD</p>
        <div className="button-container">
          <button className="courses-btn">Courses</button>
          <button className="demo-btn">Demo Class</button>
        </div>
      </div>
      <div className="image-section">
        <img src="home_main.png" alt="Learn English" className="hero-image" />
      </div>
    </div>
  );
}

export default Home;
