import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    // Set canvas size
    chartRef.current.width = 400; // Adjust width as needed
    chartRef.current.height = 400; // Adjust height as needed
    

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [35, 65], // Dummy data, replace with actual counts
          backgroundColor: [
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 99, 132, 0.8)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'gender split',
            fontSize: 16,
          },
          legend: {
            position: 'bottom',
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

export default PieChart;





