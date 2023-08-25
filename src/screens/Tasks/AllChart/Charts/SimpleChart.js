// SimpleChart.js
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartData from './ChartData.js';
import './SimpleChart.css';

const SimpleChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [dataIndex, setDataIndex] = useState(0); // Added state to manage data index

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: ChartData.data[dataIndex], // Use the selected data from ChartData.js
      options: ChartData.options,
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [dataIndex]); // Now the effect depends on the selected data index

  const toggleData = () => {
    setDataIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); // Toggle between 0 and 1
  };

  return (
    <div className="chartContainer">
      <button onClick={toggleData}>Toggle Data</button>
      <canvas ref={chartRef} />
    </div>
  );
};

export default SimpleChart;
