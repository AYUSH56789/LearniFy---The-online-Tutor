import React, { useState } from "react";
import "./Card.css";
import { FaHeart } from "react-icons/fa" ;
import { Link } from 'react-router-dom';


const Card = ({imgUrl}) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  // const handleBuyNowClick = () => {
  //   navigate('/course-detail'); 
  // };

  return (
    <div>
      <div className="card">
        <div className="card-img-container">
          <img
            src={imgUrl}
            alt="Course Image"
            className="card-img"
          />
          <div className="card-buttons">
            <FaHeart 
            className="like-button"
            onClick={handleLikeClick}
            style={{ color: liked ? 'red' : 'white' }}
            size={30}
            />

          </div>
        </div>

        <div className="card-content">
          <h2 className="course-title">Master Spoken English</h2>
          <p className="author-name">By Dhruv Ayush</p>
          <p className="price">
            <span className="new-price">Rs. 2000</span>
            <span className="old-price">1000</span>
            <span className="discount">50% off</span>
          </p>
        </div>
        <Link to="/course-detail">
          <button className="buy-now-btn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
