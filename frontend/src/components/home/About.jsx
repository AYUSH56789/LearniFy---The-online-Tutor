import React from 'react'
import "./About.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function About() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one image at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
      };

  return (
    <div>
            <section className="about-section">
      <h1 className="about-heading">About Learnify</h1>
      <div className="about-heading-line"></div> 
      <p className="about-description">
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi libero, eos doloribus at obcaecati soluta aut quasi similique neque, facere quaerat? Iusto modi perferendis asperiores!
      </p>

      {/* Slider Component */}
      <div className="about-carousel-container">
        <Slider {...settings}>
          <div>
            <img
              src="/images/about1.png"
              alt="Students 1"
              className="about-image"
            />
          </div>
          <div>
            <img
              src="/course-main-image.jpeg"
              alt="Students 2"
              className="about-image"
            />
          </div>
          <div>
            <img
              src="/images/about3.png"
              alt="Students 3"
              className="about-image"
            />
          </div>
          <div>
            <img
              src="/images/about4.png"
              alt="Students 3"
              className="about-image"
            />
          </div>
        </Slider>
      </div>
    </section>
      
    </div>
  )
}

export default About
