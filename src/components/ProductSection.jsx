import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import image1 from "../assets/banner/1.jpg";
import image2 from "../assets/banner/2.jpg";
import image3 from "../assets/banner/3.jpg";
import image4 from "../assets/banner/4.jpg";
import image5 from "../assets/banner/5.jpg";
import image6 from "../assets/banner/6.jpg";
import image7 from "../assets/banner/7.jpg";
import image8 from "../assets/banner/8.jpg";
import image9 from "../assets/banner/9.jpg";
import image10 from "../assets/banner/10.jpg";

const ImageSlider = () => {
  const images = [
     image6, image7, image8, image9, image10,image1, image2, image3, image4, image5,
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 bg-white py-3 relative">
      <h1 className="font-bold text-xl md:text-2xl mb-3 px-4">Related Items Up To 40% Off
       
      </h1>
      
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
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
