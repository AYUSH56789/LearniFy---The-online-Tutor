import React from "react";
import "./CourseList.css";
import Card from "../course card/card";

function CourseList() {
  return (
    <div className="courses-list">
      <div className="courses-list-container-1">
        <Card imgUrl="/images/course1.png"/>
        <Card imgUrl="/images/course2.png"/>
        <Card imgUrl="/images/course3.png"/>
        <Card imgUrl="/images/course4.png"/>
        <Card imgUrl="/images/course5.png"/>
        <Card imgUrl="/images/course6.png"/>
      </div>
    </div>
  );
}

export default CourseList;
