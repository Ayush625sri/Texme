import React from "react";
import { Line, Doughnut } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  scales,
} from "chart.js";
import { cyan, cyanLight, purple, purpleLight } from "../../constants/color";
import { getLast7Days } from "../../lib/Features";
import { responsiveFontSizes } from "@mui/material";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value,
        label: "Revenue 1",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const doughtnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  
  },
  cutout: 100
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        fill: true,
        backgroundColor: [purpleLight, cyanLight],
        borderColor: [purpleLight, cyan],
        hoverBackgroundColor: [purple, cyan],
        offset: 20
      },
    ],
  };
  return <Doughnut style={{zIndex: 10}} data={data} options={doughtnutChartOptions} />;
};

export { LineChart, DoughnutChart };
