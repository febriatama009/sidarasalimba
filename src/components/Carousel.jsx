import React, { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Carousel = ({
  children: ImageSlider,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? ImageSlider.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === ImageSlider.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-y-hidden h-auto md:h-[200px] lg:h-[600px] w-auto">
      {/* The image loads */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {ImageSlider}
      </div>

      {/* Slide Button */}
      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <IoIosArrowDropleft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <IoIosArrowDropright />
        </button>
      </div> */}

      {/* The slider */}
      <div className="bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {ImageSlider.map((s, i) => (
            <div
              key={i}
              className={`transition-all bg-white rounded-full  ${
                curr === i ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
