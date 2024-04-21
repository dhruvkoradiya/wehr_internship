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

    // Dummy data for people working in different domains
    const domains = ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Manufacturing', 'Media', 'Hospitality', 'Transportation', 'Government'];
    const peopleCount = [100, 75, 50, 60, 80, 70, 45, 30, 25, 55]; // Dummy data for people count in each domain

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: domains,
        datasets: [{
          data: peopleCount,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8C54FF',
            '#FF9F40',
            '#1DB954',
            '#4BC0C0',
            '#FFD700',
            '#A52A2A',
            '#696969',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8C54FF',
            '#FF9F40',
            '#1DB954',
            '#4BC0C0',
            '#FFD700',
            '#A52A2A',
            '#696969',
          ],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'People Working in Different Domains',
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
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
