import React from 'react'
import Navbar from './components/navbar/Navbar';
import './App.css' ;
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default App ; 

