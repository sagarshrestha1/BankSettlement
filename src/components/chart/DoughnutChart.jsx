// DoughnutChart.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Votes',
        data: [300, 50, 100],
        backgroundColor: ['#3A8DDE', '#7A7A7A', '#1CD0BB'],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
   
    plugins: {
      
      legend: {
        position: 'bottom',
      },
    },
  };

  return <Doughnut height={100} data={data} options={options} />;
};

export default DoughnutChart;
