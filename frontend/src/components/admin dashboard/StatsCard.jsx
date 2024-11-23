// components/StatsCards.js
import React from "react";
import "./StatsCard.css"; 
function StatsCards(){
  const stats = [
    { label: "Total Earning", value: "$909", icon: "💰" },
    { label: "Total Students", value: "5000", icon: "👥" },
    { label: "Total Courses", value: "10000", icon: "🎓" },
    { label: "Total MockTests", value: "150", icon: "📊" },
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <span className="stat-icon" style={{color: "#F53DEE"}}>{stat.icon}</span>
          <div className="stat-info">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
