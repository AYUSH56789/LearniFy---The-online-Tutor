import React from "react";
import "./CourseList.css";
import Card from "../course card/card";

function CourseList() {
  return (
    <div className="courses-list">
      <div className="courses-list-container-1">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="courses-list-container-2">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CourseList;
