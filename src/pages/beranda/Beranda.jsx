import React from "react";
import { Hero, RekapanData, TentangSidarasalimba } from "./section";

const Beranda = () => {
  return (
    <div className="grid gap-y-28">
      <Hero />
      <TentangSidarasalimba />
      <RekapanData />
    </div>
  );
};

export default Beranda;
