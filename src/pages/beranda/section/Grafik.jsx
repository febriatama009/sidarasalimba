import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Data } from "../../../config/constants/chartData";
import { CategoryScale } from "chart.js";
import BarChart from "../../../components/charts/BarChart";
import PieChart from "../../../components/charts/PieChart";

Chart.register(CategoryScale);

const Grafik = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "gray",
        borderWidth: 0,
      },
    ],
  });

  return (
    <div className="w-10/12 m-auto justify-center items-center">
      <div className="text-red-500 text-xl mb-12 font-bold">Grafik</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="grid gap-12">
          <BarChart chartData={chartData} />
          <PieChart chartData={chartData} />
        </div>
        <div className="grid gap-12">
          <BarChart chartData={chartData} />
          <BarChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Grafik;
