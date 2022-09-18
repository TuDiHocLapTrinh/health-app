import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { bodyScoreChart } from '~/mocks';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  // Modify the axis by adding scales
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: true,
        color: '#ffffff',
        fontSize: '12',
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: true,
        color: '#777777',
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const BodyScoreGraph = () => {
  return (
    <div className='h-[316px] w-full md:w-3/5 flex bg-ha-dark-600 p-5 content-center justify-center'>
      <Line options={options} data={bodyScoreChart} />
    </div>
  );
};

export default BodyScoreGraph;
