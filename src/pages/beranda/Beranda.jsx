import React from "react";
import {
  Hero,
  RekapanData,
  TentangSidarasalimba,
  Grafik,
  TabelRankKab,
  TabelRankKec,
  Galeri,
  StatistikPengunjung,
} from "./section";

const Beranda = () => {
  return (
    <div className="grid gap-y-28">
      <Hero />
      <TentangSidarasalimba />
      <RekapanData />
      <Grafik />
      <TabelRankKab />
      <TabelRankKec />
      <Galeri />
      <StatistikPengunjung />
    </div>
  );
};

export default Beranda;
