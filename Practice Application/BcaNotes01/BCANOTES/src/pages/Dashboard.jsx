import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { FiBell, FiHelpCircle } from 'react-icons/fi'

function Dashboard() {
  return (
    <>
        <div className='bg-red-400 h-screen relative flex'>

            {/* top */}
            <div className='bg-green-400'>
                {/* // nav for dashbard  */}
            <div className='bg-white py-3 flex w-full shadow gap-1 absolute top-0 left-0'>
                {/* left for search bar */}
                <div className=' w-[50%] flex justify-start items-center px-5'>
                <div className='flex items-center bg-gray-200 rounded-md px-3 py-2 w-full shadow-sm'>
                    <FiSearch className='text-gray-400' size={20}/>
                    <input 
                    type="text" 
                    placeholder="Search subjects, notes, or previous Questions ..." 
                    className='ml-2 w-full outline-none text-gray-700 placeholder-gray-400'
                    />
                </div>
                </div>

                {/* right for notification and help */}
                <div className='w-[50%] flex justify-end items-center px-10 gap-5'>
                {/* Notification icon */}
                <FiBell className='text-gray-400 cursor-pointer' size={24} />

                {/* Help icon */}
                <FiHelpCircle className='text-gray-400 cursor-pointer' size={24} />
                </div>

            </div>
            </div>

            {/* buttom  */}
            <div className='bg-gray-200 w-full h-full pt-20 overflow-y-scroll overflow-x-hidden px-5 hide-scrollbar'>
                <div className='bg-red-400 h-[250px] rounded-xl'></div>
                <div className='bg-green-400 mt-5 flex gap-1'>

                    {/* left div  */}
                    <div className='bg-yellow-400 w-[65%] flex flex-col gap-10'>

                        {/* //recently visited  */}
                        <div className='bg-purple-400 h-[350px] rounded-2xl'>recently</div>
                        {/* // subject progress  */}
                        <div className='bg-purple-400 h-[350px] rounded-2xl'>subject progress</div>

                    </div>

                    {/* right div  */}
                    <div className='bg-yellow-400 w-[35%] px-5 gap-1 flex flex-col'>
                        {/* //todo list */}
                        <div className='bg-white h-[500px] rounded-md'>todo</div>
                        {/* // exam coundown  */}
                        <div className='bg-white h-[200px] rounded-md'>todo</div>
                    </div>

                </div>
                
            </div>

        </div>
    </>
  )
}

export default Dashboard
