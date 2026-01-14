import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='bg-red-400 w-screen h-screen relative'>
        <Navbar/>
        <div className='bg-gray-50 w-full h-full relative'>
          <img src="/img/pic02.jpg" alt="img"  className='w-full h-full object-cover'/>
          <div className=' w-full h-full flex gap-3 justify-center items-center absolute z-40 top-0'>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App