import React from 'react';
import './MockTestCard.css';
import { FaFileAlt } from 'react-icons/fa'; // Importing icon from react-icons

const MockTestCard = () => {
  return (
    <div className="mock-test-card">
      <div className="icon-container">
        <FaFileAlt className="icon" />
      </div>
      <div className="card-content">
        <h3>IELTS Practice Part-1</h3>
        <p className="subject">IELTS</p>
        <div className="pricing">
          <span className="price">Rs. 499</span>
          <span className="original-price">699</span>
          <span className="discount">30% off</span>
        </div>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default MockTestCard;
