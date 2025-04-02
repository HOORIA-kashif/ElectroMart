import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import image1 from "../assets/tab/1.webp";
import image2 from "../assets/tab/2.webp";
import image3 from "../assets/tab/3.webp";
import image4 from "../assets/tab/4.webp";
import image5 from "../assets/tab/5.webp";
import image6 from "../assets/tab/6.webp";
import image7 from "../assets/tab/7.jpg";
import image8 from "../assets/tab/8.jpg";
import image9 from "../assets/tab/9.webp";
import image10 from "../assets/tab/10.webp";
import image11 from "../assets/tab/1.webp";
import image12 from "../assets/tab/2.webp";
import image13 from "../assets/tab/3.webp";
import image14 from "../assets/tab/4.webp";
import image15 from "../assets/tab/5.webp";
import image16 from "../assets/tab/6.webp";
import image17 from "../assets/tab/7.jpg";
import image18 from "../assets/tab/8.jpg";
import image19 from "../assets/tab/9.webp";
import image20 from "../assets/tab/10.webp";

const ImageSlider = () => {
  const images = [
    image6, image7, image8, image9, image10, image1, image2, image3, image4, image5,
    image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  ];

  return (
    <div className="w-full mx-auto px-12 bg-white py-3 relative">
      <Swiper
        slidesPerView={3} 
        spaceBetween={10}
        navigation={true}
        loop={true} 
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
        }}
        modules={[Navigation, Autoplay]}
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
            slidesPerView: 12, 
            spaceBetween: 25,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-20 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white; /* White background */
            color: black; /* Black text color */
            width: 40px; /* Button width */
            height: 40px; /* Button height */
            border-radius: 50%; /* Make the buttons round */
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
            font-size: 20px; /* Adjust arrow size */
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
