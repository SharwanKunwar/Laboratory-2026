import React from 'react'
// Swiper imports
import { Navigation, Pagination, Scrollbar, Autoplay, A11y, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'


const images = [
  "image/p1.jpg",
  "image/p2.jpg",
  "image/p3.jpg",
  "image/p4.jpg",
  "image/p5.jpg",
  "image/p6.jpg",
  "image/p7.jpg",
  "image/p8.jpg",
  "image/p9.jpg",
  "image/p11.jpg",
  "image/p12.jpg",
  "image/p13.jpg",
  "image/p14.jpg",
  "image/p15.jpg",
  "image/p16.jpg",
  "image/p17.jpg",
  "image/p18.jpg",
]

function BcaDefaultPage() {
  return (
    <>
        <div className='bg-gray-50 w-full h-full px-5 pt-10 border-l border-black/30 shadow-sm'>
            {/* // slider  */}
            <div className='h-[400px] rounded-md'>
                <Swiper
              className="h-full rounded-xl shadow-sm"
              modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade]}
              slidesPerView={1}
              effect="fade"
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 3000 }}
            >
              {images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item}
                    alt="slide"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>    
            </div>

            {/* // message  */}
            <div className=' mt-5 flex justify-center items-center'>
                <h1 className='py-10 text-lg font-medium'>“Welcome to BCA Hub. To continue, please select a semester.”</h1>
            </div>




        </div>
    </>
  )
}

export default BcaDefaultPage
