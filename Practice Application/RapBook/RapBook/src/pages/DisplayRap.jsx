import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'antd'


function DisplayRap() {

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
      <div className='w-full h-[500px] flex'>

        

        {/* RIGHT SIDE - EVENTS */}
        <div className='bg-gray-50 w-full h-full p-5 grid grid-cols-1 gap-4 overflow-y-auto pt-20'>

          {filteredEvents.length === 0 && (
            <p>No events found</p>
          )}

          {
            filteredEvents.map((item, index)=>(
                <div key={index} className=' w-full flex gap-3 mb-10'>
                    {/* left  */}
                    <div className=' w-[50%] h-[500px]'>
                        <img src="/image/p01.jpg" alt="img" className='w-full h-full object-cover'/>
                    </div>
                    {/* right  */}
                    <div className=' w-[50%] p-5'>
                        <h1 className='text-xl font-medium'>{item.title}</h1>
                        <p className='mt-5 whitespace-pre-line'>{item.description}</p>
                    </div>
                </div>
                    
            ))
          }

        </div>
      </div>
    </>
  )
}

export default DisplayRap
