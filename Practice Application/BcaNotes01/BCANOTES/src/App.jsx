import React from 'react'

function App() {
  return (
    <>
      <div className='bg-gray-400 w-screen h-screen flex gap-1'>

        {/* //left box  */}
        <div className='bg-gray-50 w-[20%] h-full p-5'>
          
          {/* //logo and title  */}
          <div className=' h-[50px] flex justify-start items-center gap-2'>
            <img src="/vite.svg" alt="logo" className='bg-indigo-400 p-2 rounded-sm'/>
            <h1 className='text-2xl tracking-widest font-medium'><span className='text-red-400'>B</span><span className='text-green-400'>C</span><span className='text-blue-400'>A</span></h1>
          </div>

          {/* //nav list  */}
          <div className='mt-10'>
            <ul className='flex flex-col gap-2'>
              <li className='font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400'>Dashboard</li>
              <li className='font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400'>Library</li>
              <li className='font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400'>PYQs</li>
              <li className='font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400'>Profile</li>
              <li className='font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400'>Settings</li>
            
            </ul>
          </div>

        </div>

        {/* right box  */}
        <div className='bg-gray-50 w-[80%] h-full'></div>

      </div>
    </>
  )
}

export default App
