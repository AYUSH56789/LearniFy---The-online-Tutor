import React from 'react'
import Card from '../course card/card'
import "./Courses.css" 

function Courses() {
  return (
    <div className='courses-container'>
      {/* <h2>this is courses page of flamingo</h2> */}
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Courses
