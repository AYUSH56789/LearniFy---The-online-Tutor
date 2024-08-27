import React from 'react'
import Navbar from './components/navbar/Navbar';
import './App.css' ;
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';
import Card from './components/course card/card';
import Courses from './components/courses/Courses';

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Courses/> */}
    <Footer/>
    </>
    
  )
}

export default App ; 

