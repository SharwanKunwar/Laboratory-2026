import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
  EffectFade,
} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Button } from 'antd';

const images = [
    "/image/img11.jpg",
    "/image/img04.jpg",
    "/image/img14.jpg",
    
  "/image/img15.jpg",
  "/image/img01.jpg",
  "/image/img05.jpg",
  "/image/img07.jpg",
  "/image/img09.jpg",
  "/image/img16.jpg",
  "/image/img12.jpg",
  "/image/img13.jpg",
  
  
];

function IntroductionPage() {
  return (
    <div className='w-full h-full p-4 flex justify-end items-end relative'>
      <div className='border-b border-white/50 w-full h-[400px] absolute top-0 right-0 p-5'>
        <Swiper
          className="w-full h-full transition-all border rounded-md border-white/30 shadow-sm"
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade]}
          slidesPerView={1}
          effect="fade"
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt="slide"
                className="w-full h-full object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='w-full h-[250px] rounded-md'>
        <Button>Catch Me</Button>
      </div>
      
    </div>
  );
}

export default IntroductionPage;
