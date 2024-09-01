import React from "react";
import Card from "../course card/card";
import "./Courses.css";
import CoursesNav from "./CoursesNav";
import CourseFilter from "./CourseFilter";
import CourseSearch from "./CourseSearch";
import CourseList from "./CourseList";

function Courses() {
  return (
    <>
      <div className="main-container-img">
        <img src="course-main-image.jpeg" alt="flamigo" className="main-img" />
        <div className="root-container">
          <div className="main-content">
            <h1
              style={{ fontFamily: "DM Sans , sans-serif", fontWeight: "700" }}
            >
              Explore Our Courses
            </h1>
            <p
              style={{
                fontFamily: "Poppins , sans-serif",
                fontWeight: "400",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut amet
              tempore quae aspernatur animi unde.
            </p>
          </div>
          <div className="button">
            <button
              className="explore-btn"
              style={{
                fontFamily: "DM Sans , sans-serif",
                fontWeight: 500,
                fontSize: "25px",
              }}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <CoursesNav />

      <div className="course-content">
        <div className="left-container">
          <CourseFilter />
        </div>

        <div className="right-container">
          <div className="right-upper">
            <CourseSearch />
          </div>
          <div className="right-lower">
            <CourseList />
          </div>
        </div>
      </div>

      <div className="courses-container">
        {/* <h2>this is courses page of flamingo</h2> */}
        {/* <Card/>
      <Card/>
      <Card/> */}
      </div>
    </>
  );
}

export default Courses;
