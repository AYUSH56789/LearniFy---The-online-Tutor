import React from "react";
import "./Testimonials.css";
export default function Testimonials() {
  return (
    <div className="testimonials">
        <div className="testimonialHeading">
            <h1 className="t-heading">Testimonials</h1>
            <div className="about-heading-line"></div>
        </div>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="avatar">
            <img src="/icon/avatarFemale.png" height="80px" width="80px" alt="Emily Evans" />
          </div>
          <div className="testimonialContentContainer">
            <h3 className="testimonialContentHeading">Ayush Singh</h3>
            <p className="testimonialContentDiscription">
              Lorem ipsum dolor sit amet, ullamcous cididit consectetur a
              magnarels alia....
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="avatar">
            <img src="/icon/avatarMale.png" alt="Emily Evans" />
          </div>
          <div className="testimonialContentContainer">
            <h3 className="testimonialContentHeading">Dhruv Girdhar</h3>
            <p className="testimonialContentDiscription">
              Lorem ipsum dolor sit amet, ullamcous cididit consectetur a
              magnarels alia....
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="avatar">
            <img src="/icon/avatarFemale.png" alt="Emily Evans" />
          </div>
          <div className="testimonialContentContainer">
            <h3 className="testimonialContentHeading">Inzi Houqe</h3>
            <p className="testimonialContentDiscription">
              Lorem ipsum dolor sit amet, ullamcous cididit consectetur a
              magnarels alia....
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="avatar">
            <img src="/icon/avatarMale.png" alt="Emily Evans" />
          </div>
          <div className="testimonialContentContainer">
            <h3 className="testimonialContentHeading">Ansul Oberoi</h3>
            <p className="testimonialContentDiscription">
              Lorem ipsum dolor sit amet, ullamcous cididit consectetur a
              magnarels alia....
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="avatar">
            <img src="/icon/avatarMale.png" alt="Emily Evans" />
          </div>
          <div className="testimonialContentContainer">
            <h3 className="testimonialContentHeading">Emily Evans</h3>
            <p className="testimonialContentDiscription">
              Lorem ipsum dolor sit amet, ullamcous cididit consectetur a
              magnarels alia....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
