import React from 'react'
import { FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Button, Input } from 'antd'
import OwnerRoomCard from '../components/OwnerRoomCard';

function DashboardOwner() {
  return (
    <>
          {/* top div  */}
            <div className='flex justify-between items-center py-3 px-5 border-b border-black/30 absolute w-full top-0'>
              <h1 className='text-xl font-medium'>Dashboard Overview</h1>
              <div className='flex gap-3 items-center'>
                <p className='text-neutral-400'>kathmandu nepal</p>
                <Button size='large'>+ Post New Room</Button>
              </div>
            </div>
            
            {/* buttom div */}
            <div className=' pt-20 '>

              {/* //box1  */}
              <div className='flex flex-col gap-3 p-5'>
                {/* top div  */}
                <div className='w-full h-35 flex gap-3'>
                  {/* greetings  */}
                  <div className='bg-linear-to-br from-indigo-400 to-indigo-400 via-pink-400 w-6/12 flex flex-col justify-end items-start pl-5 pb-4 rounded-sm shadow'>
                  <h1 className='text-3xl font-medium text-white'>Nameste, Sharwan jung kunwar</h1>
                  <p className='text-neutral-300'>Here's what's happening withyour listing today.</p>
                  </div>
                  {/* blank  */}
                  <div className='bg-white w-6/12 shadow rounded-sm'></div>
                </div>

                {/* buttom div  */}
                <div className='w-full gap-4 grid grid-cols-3'>
                  {/* box01 */}
                  <div className='bg-white p-5 rounded-sm shadow '>
                    <div className='flex justify-between items-center'>
                      <FiBell size={30} className="text-gray-700 cursor-pointer hover:text-blue-500 bg-indigo-400/30 backdrop-blur-sm w-[40px] h-[40px] rounded-md p-2" />
                      <Button>+2%</Button>
                    </div>
                    <div className='mt-3'>
                      <h1 className='font-medium text-neutral-400'>Active Listing</h1>
                      <p className='font-bold'>12</p>
                    </div>
                  </div>
                  {/* box02 */}
                  <div className='bg-white p-5 rounded-sm shadow'>
                    <div className='flex justify-between items-center'>
                      <FiBell size={30} className="text-gray-700 cursor-pointer hover:text-blue-500 bg-indigo-400/30 backdrop-blur-sm w-[40px] h-[40px] rounded-md p-2" />
                      <Button>Action Needed</Button>
                    </div>
                    <div className='mt-3'>
                      <h1 className='font-medium text-neutral-400'>Pending Requests</h1>
                      <p className='font-bold'>5</p>
                    </div>
                  </div>
                  {/* box01 */}
                  <div className='bg-white p-5 rounded-sm shadow'>
                    <div className='flex justify-between items-center'>
                      <FiBell size={30} className="text-gray-700 cursor-pointer hover:text-blue-500 bg-indigo-400/30 backdrop-blur-sm w-[40px] h-[40px] rounded-md p-2" />
                      <Button>+10%</Button>
                    </div>
                    <div className='mt-3'>
                      <h1 className='font-medium text-neutral-400'>Occupancy Rate</h1>
                      <p className='font-bold'>85%</p>
                    </div>
                  </div>

                </div>

                {/* // property  ------------------------------------------------------------------*/}
                <div className='mt-5'>

                  {/* title  */}
                  <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium'>Accepted Requests</h1>
                  </div>

                  {/* //list  */}
                  <div className='mt-5 grid grid-cols-1 gap-3'>
                    <div className='flex flex-wrap gap-3 grid grid-cols-2'>
                      <div className='bg-white h-[200px] rounded-sm'></div>
                      <div className='bg-white h-[200px] rounded-sm'></div>
                      <div className='bg-white h-[200px] rounded-sm'></div>
                      <div className='bg-white h-[200px] rounded-sm'></div>
                      
                    </div>
                  </div>

                </div>


                {/* // property  ------------------------------------------------------------------*/}
                <div className='mt-5'>

                  {/* title  */}
                  <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium'>Your Properties</h1>
                    
                  </div>

                  {/* //list  */}
                  <div className='mt-5 grid grid-cols-1 gap-3'>
                    <OwnerRoomCard/>
                    <OwnerRoomCard/>
                    <OwnerRoomCard/>
                    <OwnerRoomCard/>
                    <OwnerRoomCard/>
                  </div>

                </div>

              </div>
            </div>
    </>
  )
}

export default DashboardOwner