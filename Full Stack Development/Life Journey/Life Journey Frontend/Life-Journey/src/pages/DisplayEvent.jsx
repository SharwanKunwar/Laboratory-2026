import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'antd'
import RapCard from '../components/RapCard'

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
      <div className='w-full h-full flex'>

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

          {filteredEvents.map((event, index) => (
            <RapCard key={index} name={event.title} des={event.description} location={event.location} date={event.date}/>
          ))}


        </div>
      </div>
    </>
  )
}

export default DisplayEvent
