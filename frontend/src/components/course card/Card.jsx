import React, { useState } from "react";
import "./Card.css";
import { FaHeart } from "react-icons/fa" ;

const Card = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <div className="card">
        <div className="card-img-container">
          <img
            src="https://picsum.photos/200/300"
            alt="Course Image"
            className="card-img"
          />
          <div className="card-buttons">
            <FaHeart 
            className="like-button"
            onClick={handleLikeClick}
            style={{ color: liked ? 'red' : 'white' }}
            />

          </div>
        </div>

        <div className="card-content">
          <h2 className="course-title">Master Spoken English</h2>
          <p className="author-name">By Ayush Singh</p>
          <p className="price">
            <span className="new-price">Rs. 2000</span>
            <span className="old-price">1000</span>
            <span className="discount">50% off</span>
          </p>
        </div>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
