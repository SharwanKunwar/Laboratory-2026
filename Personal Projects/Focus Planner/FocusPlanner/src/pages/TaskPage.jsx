import React from 'react'
import TaskCard from '../components/TaskCard'

function TaskPage() {
  return (
    <div className='bg-red-400 w-full h-full grid grid-cols-3 gap-2 p-5 my-5'>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      
      
    </div>
  )
}

export default TaskPage
