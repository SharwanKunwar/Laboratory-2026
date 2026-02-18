import React from 'react'
import Navbar from '../components/Navbar'
import TaskPage from './TaskPage'

function ComposeTask() {
  return (
    <>
        <div className='w-full h-full '>
            <Navbar/>
            <div className=' h-full w-full pt-17 overflow-y-scroll overflow-x-hidden hide-scrollbar relative'>
              <TaskPage/>
            </div>
        </div>
    </>
  )
}

export default ComposeTask
