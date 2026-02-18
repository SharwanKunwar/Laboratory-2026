import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Button, Modal } from 'antd';

const images = [
  "/image/img11.jpg",
  "/image/img04.jpg",
  "/image/img14.jpg",
  "/image/img15.jpg",
  "/image/img01.jpg",
  "/image/img07.jpg",
  "/image/img13.jpg",
];

function IntroductionPage() {

  const Quote = [
    "The Magic you are looking for is in the work you are avoiding.",
    "To get something you never had you have to do something you never did."
  ];

  const catchMessage = [
    "Nice try. Now go finish your task 😏",
    "Caught me? Cool. Your deadline is still waiting.",
    "Fast hands. Slow progress. Go work.",
    "Victory achieved. Now open that assignment.",
    "You won the button. Now win your goals.",
    "Impressive reflexes. Use them on your keyboard.",
    "Stop playing hero. Start finishing tasks.",
    "Energy for this? Great. Use it wisely.",
    "Achievement unlocked: Avoiding work.",
    "Okay speedster… back to grinding."
  ];

  const [position, setPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [open, setOpen] = useState(false); // modal open state
  const [messageIndex, setMessageIndex] = useState(0); // random catchMessage index

  const moveButton = () => {
    const randomTop = Math.random() * 80; 
    const randomLeft = Math.random() * 80;

    setPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  // Rotate Quote
  React.useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % Quote.length);
    }, 6000); // change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  // Open modal with random catchMessage
  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * catchMessage.length);
    setMessageIndex(randomIndex);
    setOpen(true);
  };

  return (
    <div className='w-full h-full p-4 flex justify-end items-end '>

      {/* Swiper */}
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

      {/* Moving Button */}
      <div className="w-full h-[250px] relative flex justify-end items-end">
        <p className="text-sm text-gray-50 transition-all duration-500">
          {Quote[quoteIndex]}
        </p>
        <Button
          onMouseEnter={moveButton}
          onClick={handleButtonClick} // 👈 show random catchMessage
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            transform: "translate(-50%, -50%)",
            transition: "all 0.2s ease"
          }}
          className='rounded-full! bg-transparent! h-[70px]! w-[70px]!'
        >
          <img src="catch02.png" alt='img' className='w-full h-full object-cover'/>
        </Button>
      </div>

      {/* Modal */}
      <Modal
        title="Congratulations 🎉"
        open={open}
        footer={null}      // remove default buttons
        closable={false}   // remove top-right X button
        centered
      >
        <p>You are fast 😎🔥</p>
        <p>{catchMessage[messageIndex]}</p>
        
        {/* Custom Got it Button */}
        <div className="flex justify-end mt-4">
          <Button type="primary" onClick={() => setOpen(false)}>
            Got it
          </Button>
        </div>
      </Modal>


    </div>
  );
}

export default IntroductionPage;
