import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import image1 from "../assets/banner/11.jpg";
import image2 from "../assets/banner/12.jpg";
import image3 from "../assets/banner/13.jpg";
import image4 from "../assets/banner/14.jpg";
import image5 from "../assets/banner/15.jpg";
import image6 from "../assets/banner/6.jpg";
import image7 from "../assets/banner/7.jpg";
import image8 from "../assets/banner/8.jpg";
import image9 from "../assets/banner/9.jpg";
import image10 from "../assets/banner/10.jpg";

const ImageSlider = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-4 py-3 relative bg-white">
      <h1 className="font-bold text-xl md:text-2xl mb-3 px-4">More Items To Consider</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 3, 
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3, 
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5, 
            spaceBetween: 25,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Navigation Button Styles */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white; /* White background */
            color: black; /* Black text color */
            width: 50px; /* Button width */
            height: 60px; /* Button height */
            display: flex;
            align-items: center;
            justify-content: center;
          
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add shadow */
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background-color: #f3f4f6; /* Light gray on hover */
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 26px; /* Adjust arrow size */
            font-weight: bold;
          }
            
          /* Responsive styles for extra small screens */
          @media (max-width: 640px) {
            .swiper-button-next,
            .swiper-button-prev {
              width: 35px; /* Smaller button width */
              height: 35px; /* Smaller button height */
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 12px; /* Smaller arrow size */
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
