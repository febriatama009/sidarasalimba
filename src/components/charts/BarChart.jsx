import React from "react";
import { Bar } from "react-chartjs-2";

const BarCharts = ({ chartData }) => {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "",
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default BarCharts;
