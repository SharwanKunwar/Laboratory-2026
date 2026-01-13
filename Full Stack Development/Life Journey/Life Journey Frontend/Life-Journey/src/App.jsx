import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='bg-red-400 w-screen h-screen relative'>
        <Navbar/>
        <div className='bg-gray-50 w-full h-full pt-20'>
          <div className='bg-gray-50 w-full h-full flex gap-3 justify-center items-center'>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App