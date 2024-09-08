import React from "react";
import "./Mock_card.css";

function Mock_card() {
  return (
    <div className="card">
      <div className="icon-container">
        <img src="exam 1.png" alt="icon" className="icon" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Grammar Part-1</h3>
        <p className="card-subtitle">General</p>
        <div className="price-section">
          <span className="price-free">Free</span>
          <span className="price-original">Rs 699</span>
          <span className="discount">100% off</span>
        </div>
        
      </div>

      <div className="btn-container">
        <button className="start-test-button">Start Test</button>
        </div>
    </div>
  );
}

export default Mock_card;
