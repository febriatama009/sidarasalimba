import React from "react";
import Carousel from "../../../components/Carousel";
import ImageSlider from "@/config/constants/imageData";

const Galeri = () => {
  return (
    <div className="w-10/12 items-center justify-center m-auto">
      <div className="text-red-500 text-xl mb-12 font-bold">Galeri</div>

      <Carousel autoSlide={true}>
        {ImageSlider.map((image) => (
          <img key={image.id} src={image.url} alt={`Image ${image.name}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default Galeri;
