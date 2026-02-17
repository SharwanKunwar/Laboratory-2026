import React from 'react'
import Navbar from '../components/Navbar'
import TaskPage from './TaskPage'

function ComposeTask() {
  return (
    <>
        <div className='w-full h-full bg-red-400'>
            <Navbar/>
            <div className='bg-green-400 h-full w-full pt-17 overflow-y-scroll overflow-x-hidden'>
              <TaskPage/>
            </div>
        </div>
    </>
  )
}

export default ComposeTask
