import React from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div className="w-10/12 items-center mx-auto mt-[60px]">
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
      <div className="-mt-[300px] lg:-mt-[260px] flex justify-center mx-auto items-center lg:w-fit border-8 border-[#fff] rounded-md shadow-xl">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ojQbArbuN4E&pp=ygUTd29uZGVyZnVsIGluZG9uZXNpYQ%3D%3D"
          controls={true}
        />
      </div>
    </div>
  );
};

export default Hero;
