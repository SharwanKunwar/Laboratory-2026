import React from 'react'
import Navbar from '../components/Navbar'

function ComposeTask() {
  return (
    <>
        <div className='bg-red-400 w-full h-full'>
            <Navbar/>
            <div className='bg-green-400 h-full w-full pt-17'>
                compose task here 
            </div>
        </div>
    </>
  )
}

export default ComposeTask
