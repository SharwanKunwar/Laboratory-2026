import React, { useState } from 'react'
import { Button, Modal, Input, DatePicker, message } from 'antd'
import axios from 'axios'

function Navbar() {

  const [isModalOpen, setIsModalOpen] = useState(false)

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

      // reset form
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
    <>
      <div className='bg-gray-400/30 backdrop-blur-sm w-full h-[70px] absolute flex justify-center items-center shadow z-50'>
        
        {/* left */}
        <div className='w-[50%] flex items-center px-10 gap-3'>
          <img src="vite.svg" alt="logo" className='bg-white p-2 rounded-sm'/>    
          <h1 className='text-xl'>Life Journey</h1>
        </div>

        {/* right */}
        <div className='w-[50%] flex justify-end px-10 items-center gap-3'>
          <Button size='large' className='px-15!' onClick={() => setIsModalOpen(true)}> Add Event </Button>
        </div>
      </div>

      {/* Modal */}
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
    </>
  )
}

export default Navbar
