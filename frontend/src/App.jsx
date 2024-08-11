import React from 'react'
import Navbar from './components/navbar/Navbar';
import './App.css' ;
import Home from './components/home/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
    
  )
}

export default App ; 

