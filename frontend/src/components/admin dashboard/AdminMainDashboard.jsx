import React from 'react'
import "./AdminMainDashboard.css"
import Sidebar from './Sidebar'
import StatsCards from './StatsCard'
import SalesChart from './SalesChart'

function AdminMainDashboard() {
  return (
    <div className='dashboard-container'>
      <Sidebar/>

      <div className="dashboard-content">

        <StatsCards/> 
        <SalesChart/>


      </div>


    </div>
  )
}

export default AdminMainDashboard
