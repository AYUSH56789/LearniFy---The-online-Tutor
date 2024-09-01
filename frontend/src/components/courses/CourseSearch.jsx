import React from "react";
import "./CourseSearch.css";

function CourseSearch() {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Course Name"
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default CourseSearch;
