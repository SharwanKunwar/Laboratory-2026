import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
        <div className=' w-[80%] h-[80%] flex flex-col items-center gap-5 pt-30'>
              <div className='bg-white/30 backdrop-blur-sm w-[70%] h-[80%] rounded-sm flex flex-col items-center gap-5 justify-center'>
                <h1 className='text-4xl font-medium text-white'>Hello, Welcome back !!</h1>
              <p className='text-center px-20 text-white/90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem non aspernatur sequi sit hic quam harum! Nihil veniam rem nam beatae consequatur excepturi, aperiam voluptate ullam, modi dignissimos aliquid!</p>
              <Link to="displayEvent">
                <Button size='large' className='px-20! mt-5'>Display Events</Button>
              </Link>
              <p className='text-white mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, alias!</p>
              </div>
        </div>
    </>
  )
}

export default HomePage