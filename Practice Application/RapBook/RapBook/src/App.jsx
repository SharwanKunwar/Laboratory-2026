import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Button, Modal, Input, Card, DatePicker, message } from 'antd'
import axios from 'axios'

// Swiper imports
import { Navigation, Pagination, Scrollbar, Autoplay, A11y, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import DisplayRap from '../src/pages/DisplayRap'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'



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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDisplayModalOpen, setIsDisplayModalOpen] = useState(false)

  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: null,
    location: ''
  })

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      const payload = {
        title: eventData.title,
        description: eventData.description,
        date: eventData.date?.format('YYYY-MM-DD'),
        location: eventData.location
      }

      await axios.post('http://localhost:8080/api/post', payload)

      message.success('Event added successfully!')
      setIsModalOpen(false)

      setEventData({
        title: '',
        description: '',
        date: null,
        location: ''
      })
    } catch (error) {
      console.error(error)
      message.error('Failed to add event')
    }
  }

  return (
    <div className="bg-red-400 w-screen h-screen relative">
      <Navbar />

      <div className="bg-green-400 w-screen h-screen pt-15">
        <div className="bg-white w-full h-full p-5 flex flex-col gap-5">

          {/* Slider */}
          <div className="bg-linear-to-br from-indigo-400 h-[65%] rounded-md">
            <Swiper
              className="h-full"
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

          {/* Buttons */}
          <div className="h-[30%] flex justify-around gap-20 px-10 items-center">
            <Card className="w-[50%] bg-pink-400/30! backdrop-blur-sm! border! border-indigo-400! py-5! flex justify-center items-center">
              <Button
                size="large"
                className="px-15! bg-indigo-400! text-white! mr-5"
                onClick={() => setIsModalOpen(true)}
              >
                Compose
              </Button>

              <Button
                size="large"
                className="px-15! bg-indigo-400! text-white! ml-5"
                onClick={() => setIsDisplayModalOpen(true)}
              >
                View All
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      <Modal
        title="Add New Event"
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
        okText="Save Event"
      >
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Event Title"
            name="title"
            value={eventData.title}
            onChange={handleChange}
          />

          <Input.TextArea
            placeholder="Event Description"
            name="description"
            rows={3}
            value={eventData.description}
            onChange={handleChange}
          />

          <DatePicker
            className="w-full"
            value={eventData.date}
            onChange={(date) =>
              setEventData({ ...eventData, date })
            }
          />

          <Input
            placeholder="Location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
          />
        </div>
      </Modal>

      {/* Display Modal */}
      <Modal
        title="Display Rap"
        open={isDisplayModalOpen}
        onCancel={() => setIsDisplayModalOpen(false)}
        footer={null}
            className='bg-red-400! w-full!'
      >
        <div className='bg-purple-400'>
          <DisplayRap/>
        </div>
      </Modal>
    </div>
  )
}

export default App
