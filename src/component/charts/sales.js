import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }
    chartRef.current.width = 400; // Adjust width as needed
    chartRef.current.height = 400; // Adjust height as neede
    // Dummy data for sales vs years
    const years = ['2018', '2019', '2020', '2021', '2022', '2023'];
    const salesData = [10023400, 15623000, 14245000, 18456000, 15400102.1234, 12345678]; // Dummy sales data

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Sales',
          data: salesData,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Sales vs Years',
            fontSize: 16,
          },
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Ensure that useEffect runs only once, without dependencies

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineGraph;

