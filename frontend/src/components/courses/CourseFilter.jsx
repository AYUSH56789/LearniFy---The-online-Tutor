import React from "react";
import "./CourseFilter.css";

function CourseFilter() {
  return (
    <div className="filter-container">
      <h4>Filter</h4>
      <div className="filter-item">
        <label>Price</label>
        <select>
          <option value="all">All</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
      <div className="filter-item">
        <label>Course Category</label>
        <select>
          <option value="all">All</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="arts">Arts</option>
        </select>
      </div>
    </div>
  );
}

export default CourseFilter;
