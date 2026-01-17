import React from 'react'
import Navbar from './components/Navbar'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
  "image/p01.jpg",
  "image/p02.jpg",
  "image/p03.jpg",
  "image/p04.jpg",
  "image/p05.jpg",
  "image/p06.jpg",
  "image/p07.jpg",
  "image/p08.jpg",
  "image/p09.jpg",
  "image/p10.jpg",
]

function App() {
  return (
    <>
      <div className='bg-red-400 w-screen h-screen relative'>
        <Navbar/>
        <div className='bg-green-400 w-screen h-screen pt-15'>
          {/* silider */}
            <div className='bg-white w-full h-full p-5 flex flex-col gap-5'>
                
                {/* silider code ? */}
                <div className='bg-red-400 h-[65%] rounded-md'>
                  <Swiper
                  className='h-full'
                    // install Swiper modules
                    modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y, EffectFade]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 3000}}
                  >
                    {images.map((item, index)=>(
                      <SwiperSlide key={index}>
                        <img src={item} alt="" className='w-full h-full object-cover'/>
                      </SwiperSlide>
                    ))}
                
                  </Swiper>
                </div>


                <div className='bg-purple-400 h-[30%] flex justify-around px-10 items-center'>
                  <div className='bg-white w-[300px] h-[70%] rounded-sm shadow'>box1</div>
                  <div className='bg-white w-[300px] h-[70%] rounded-sm shadow'>box1</div>
                  <div className='bg-white w-[300px] h-[70%] rounded-sm shadow'>box1</div>
                  <div className='bg-white w-[300px] h-[70%] rounded-sm shadow'>box1</div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App