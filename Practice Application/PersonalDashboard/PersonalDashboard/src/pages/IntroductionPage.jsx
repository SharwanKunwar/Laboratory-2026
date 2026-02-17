import React from "react";
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

const images = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
  "/images/p7.jpg",
  "/images/p8.jpg",
  "/images/p9.jpg",
  "/images/p11.jpg",
  "/images/p12.jpg",
  "/images/p13.jpg",
  "/images/p14.jpg",
  "/images/p15.jpg",
  "/images/p16.jpg",
  "/images/p17.jpg",
  "/images/p18.jpg",
];

function IntroductionPage() {
  return (
    <div className="bg-indigo-400 min-h-screen flex items-center justify-center p-5">
      <div className="bg-yellow-400 h-[400px] w-full max-w-5xl rounded-xl overflow-hidden shadow-lg">

        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            Autoplay,
            A11y,
            EffectFade,
          ]}
          slidesPerView={1}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}

export default IntroductionPage;
