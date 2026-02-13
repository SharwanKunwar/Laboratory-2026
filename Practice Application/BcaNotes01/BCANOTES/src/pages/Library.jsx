
import { FiSearch } from 'react-icons/fi'
import { FiBell, FiHelpCircle } from 'react-icons/fi'

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

function Library() {
  return (
    <>
        <div className='bg-gray-50 w-full h-full py-2'>
            <div className=' w-full h-[10%]'>
                <div className=' h-[60px] flex gap-1'>
                <div className=' w-[50%] h-full flex justify-center items-center px-5'>
                    <div className='flex items-center bg-gray-200 rounded-md px-3 py-2 w-full shadow-sm'>
                        <FiSearch className='text-gray-400 hover:text-indigo-400' size={20}/>
                        <input 
                        type="text" 
                        placeholder="Search subjects, notes, or previous Questions ..." 
                        className='ml-2 w-full outline-none text-gray-700 placeholder-gray-400'
                        />
                    </div>
                </div>
                <div className='bg-white w-[50%]'>right</div>
            </div>
            </div>
            <div className=' w-full h-[90%] flex flex-col gap-1'>
                <div className=' px-5 w-full h-[400px]'>
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

                {/* // categories  */}
                <div className='h-[60px] mt-1 px-5 flex gap-2 justify-start items-center'>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>All</div>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>Love</div>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>life</div>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>technology</div>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>psychology</div>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>Love</div>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>life</div>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>technology</div>
                    <div className='bg-indigo-400 w-[100px] h-[40px] rounded-sm flex justify-center items-center text-white'>psychology</div>
                  
                </div>


                
            </div>
            
        </div>
    </>
  )
}

export default Library
