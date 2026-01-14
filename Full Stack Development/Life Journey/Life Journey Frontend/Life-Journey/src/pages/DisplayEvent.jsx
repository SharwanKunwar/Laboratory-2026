import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'antd'

function DisplayEvent() {

  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])

  // filter states
  const [locationFilter, setLocationFilter] = useState('all')

  // fetch events
  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/get')
      setEvents(res.data)
      setFilteredEvents(res.data)
    } catch (error) {
      console.error('Error fetching events', error)
    }
  }

  // filter logic
  useEffect(() => {
    if (locationFilter === 'all') {
      setFilteredEvents(events)
    } else {
      const filtered = events.filter(
        event => event.location === locationFilter
      )
      setFilteredEvents(filtered)
    }
  }, [locationFilter, events])

  return (
    <>
      <div className='w-full h-full flex gap-0'>

        {/* LEFT SIDE - FILTER */}
        <div className='bg-gray-100 w-[25%] h-full p-4 pt-20'>
          <h2 className='text-lg font-semibold mb-4'>Filter Events</h2>

          <select
            className='w-full p-2 border rounded'
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="all">All Locations</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Butwal">Butwal</option>
          </select>
        </div>

        {/* RIGHT SIDE - EVENTS */}
        <div className='bg-gray-50 w-[75%] h-full p-5 grid grid-cols-1 gap-4 overflow-y-auto pt-20'>

          {filteredEvents.length === 0 && (
            <p>No events found</p>
          )}

          {filteredEvents.map(event => (
            <div
              key={event.id}
              className='bg-white p-4 rounded shadow hover:shadow-lg transition w-full mb-3'
            >

            {/* //images */}
            <div className=' h-[400px] flex gap-1'>
                <div className=' w-[70%] h-full'>
                    <img src="/img/pic01.jpg" alt="img" className='w-full h-[101%] object-cover rounded-sm'/>
                </div>
                <div className='w-[30%] h-full flex flex-col gap-1'>
                    <div className='h-[50%]'><img src="/img/pic01.jpg" alt="img" className='w-full h-full object-cover rounded-sm'/></div>
                    <div className='h-[50%]'><img src="/img/pic01.jpg" alt="img" className='w-full h-full object-cover rounded-sm'/></div>
                </div>        
            </div>

              <h3 className='text-lg font-bold mt-5'>{event.title}</h3>
              <p className='text-sm text-gray-600 mt-1'>{event.description}</p>

              <Button size='large' className='px-20! mt-4!'>View Details</Button>

              <div className='text-sm mt-5'>
                <p>📍 {event.location}</p>
                <p>📅 {event.date}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default DisplayEvent
