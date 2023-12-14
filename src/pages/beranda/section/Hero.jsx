import React from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div className="w-10/12 items-center mx-auto mt-[60px]">
      {/* Hello */}
      <div className="bg-[url(/bg-hero.png)] bg-cover h-[500px]">
        <div className="grid py-[60px] gap-y-5 justify-center mx-auto items-center text-center">
          <p>Selamat Datang Di Website</p>
          <img
            src="/logo-sidarasalimba.svg"
            alt="Logo Sidarasalimba"
            class="lg:h-16 max-w-full"
          />
        </div>
      </div>

      {/* Player */}
      <div className="-mt-[300px] lg:-mt-[260px] flex justify-center mx-auto items-center h-10/12 w-10/12 border-8 border-[#fff] rounded-md shadow-xl">
        <div style={{ width: "90vw", height: "60vh" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ojQbArbuN4E&pp=ygUTd29uZGVyZnVsIGluZG9uZXNpYQ%3D%3D"
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
