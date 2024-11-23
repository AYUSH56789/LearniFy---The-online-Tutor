import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import "./SalesChart.css"; // Sales chart-specific styles

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function SalesChart() {
  const data = {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [
      {
        label: "Total Sales",
        data: [12000, 19000, 18000, 22000, 24000, 35000],
        borderColor: "#42a5f5",
        backgroundColor: "rgba(66, 165, 245, 0.1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="sales-chart">
      {/* <h3>Total Sale: $37.5K</h3> */}
      <Line data={data} options={options} />
    </div>
  );
}

export default SalesChart;
