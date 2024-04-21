import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    // Dummy data for roles and number of people working in those roles over the years
    const years = ['2018', '2019', '2020', '2021', '2022'];
    const roles = ['Engineer', 'Designer', 'Administrator'];
    const data = {
      'Engineer': [60, 60, 70, 80, 90], // Dummy data for number of Engineers over the years
       // Dummy data for number of Managers over the years
       // Dummy data for number of Salespersons over the years
      'Designer': [15, 20, 25, 30, 35], // Dummy data for number of Designers over the years
      'Administrator': [10, 15, 20, 25, 30], // Dummy data for number of Administrators over the years
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: years,
        datasets: roles.map(role => ({
          label: role,
          data: data[role],
          backgroundColor: getRandomColor(),
          borderColor: getRandomColor(),
          borderWidth: 1,
          barThickness: 300, // Increase the width of bars
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Number of People in Different Roles Over the Years',
            fontSize: 16,
          },
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  // Function to generate random color
  const getRandomColor = () => {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  };

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarGraph;

