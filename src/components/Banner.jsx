import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";


import image from "../assets/products/b7.jpg";
import image1 from "../assets/products/b11.jpg";
import image2 from "../assets/products/b4.jpg";
import image3 from "../assets/products/b10.jpg";
import image4 from "../assets/products/b8.jpg";
import image5 from "../assets/products/b6.jpg";
const ImageSlider = () => {
  const images = [image, image1, image2,image3,image4,image5];

  return (
    <div className="w-full  mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>

     
      <style>
        {`.swiper-pagination-bullet-active {
            background-color: #fbbf24; /* Bright yellow for the active bullet */
            opacity: 1; /* Fully opaque for the active bullet */
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
