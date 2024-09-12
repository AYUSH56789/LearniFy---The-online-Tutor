import React from 'react'
import './LatestCourses.css'
import Card from '../course card/card'
export default function LatestCourses() {
  return (
    <div className='latestCoursesContainer'>
      <div className="latestCoursesHeadingContainer">
        <h1 className='lc-heading'>Our Latest Courses</h1>
        <div className="about-heading-line"></div> 
      </div>
      <div className="latestCourseItemContainer">
        <div className="latestCourseItem">
        <Card imgUrl="/images/course1.png"/>
        <Card imgUrl="/images/course2.png"/>
        <Card imgUrl="/images/course3.png"/>
        <Card imgUrl="/images/course4.png"/>
        <Card imgUrl="/images/course5.png"/>
        <Card imgUrl="/images/course6.png"/>
        </div>
      </div>
      <div className="latestCouseMoreButtonContainer">
      <button className="latestCouseMoreButton">More Courses</button>
      </div>
    </div>
  )
}
