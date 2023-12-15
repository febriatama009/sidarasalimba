import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  return (
    <Pie
      className="items-center mx-auto"
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "",
          },
        },
      }}
    />
  );
};

export default PieChart;
