import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { FiBell, FiHelpCircle } from 'react-icons/fi'
import { Button } from 'antd'
import RecentlyVisitedCard from '../components/RecentlyVisitedCard'
import ProgressCard from '../components/ProgressCard'
import ExamCountdown from '../components/ExamCountdown'
import ProgressTracker from '../components/ProgressTracker'
import { SparklesPreview } from '../components/ui/SparklesPreview'

function Dashboard() {
  return (
    <>
        <div className='bg-red-400 h-screen relative flex'>

            {/* top --------------------------------------------------------------*/}
            <div className='bg-green-400'>
                {/* // nav for dashbard  */}
            <div className='bg-white py-3 border-b border-gray-400/70  flex w-full shadow gap-1 absolute top-0 left-0 z-50'>
                {/* left for search bar */}
                <div className=' w-[50%] flex justify-start items-center px-5 '>
                <div className='flex items-center bg-gray-200 rounded-md px-3 py-2 w-full shadow-sm'>
                    <FiSearch className='text-gray-400 hover:text-indigo-400' size={20}/>
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











            {/* buttom --------------------------------------------------------- */}
            <div className='bg-gray-200 w-full h-full pt-25 overflow-y-scroll overflow-x-hidden hide-scrollbar'>
                
                {/* welcome msg  */}
                <div className='bg-indigo-500 shadow h-50 rounded-xl flex gap-1 mx-5'>
                    
                    <SparklesPreview/>
                </div>

               



                <div className=' mt-10 flex gap-1'>

                    {/* left div  */}
                    <div className=' w-[70%] flex flex-col gap-5'>

                        {/* //recently visited  (top)*/}
                        <div className=' h-92.5 rounded-md'>
                            {/* title (recently visited) */}
                            <div className=' px-3 pt-3 h-[11%] flex justify-between'><h1 className='text-xl font-medium'>Recently Visited</h1> <h1 className=''></h1></div>
                            {/* cards for recently visited course */}
                            <div className=" w-full h-[89%] grid grid-flow-col auto-cols-max gap-5 p-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
                                <RecentlyVisitedCard />
                                <RecentlyVisitedCard />
                                <RecentlyVisitedCard />
                                <RecentlyVisitedCard />
                                <RecentlyVisitedCard />
                                <RecentlyVisitedCard />
                            </div>
                        </div>

                        
                        {/* // subject progress  (butom)*/}
                        <div className=' h-92.5 rounded-md'>
                            {/* title (recently visited) */}
                            <div className=' px-3 pt-3 mb-4 h-[11%] flex justify-between'><h1 className='text-xl font-medium'>Subject Progress</h1> </div>
                            {/* cards for recently visited course */}
                            <div className=" w-full h-[89%] grid grid-cols-1 gap-3 px-2 pb-5 overflow-y-auto overflow-x-hidden hide-scrollbar">
                                <ProgressCard/>
                                <ProgressCard/>
                                <ProgressCard/>
                                <ProgressCard/>
                                <ProgressCard/>
                                <ProgressCard/>
                                <ProgressCard/>
                                <ProgressCard/>
                                <ProgressCard/>
                            </div>
                        </div>

                    </div>

                    {/* right div  */}
                    <div className=' w-[30%] px-5 gap-5 flex flex-col'>
                        {/* todo list */}
                        <div className="bg-white h-125 rounded-md overflow-hidden">
                        <iframe
                            src="https://progress-tracker-drab.vercel.app/"
                            title="Todo App"
                            className="w-full h-full border-none rounded-md"
                            
                        />
                        </div>

                        {/* exam countdown */}
                        <div className="bg-white h-37.5 rounded-md p-5 flex flex-col justify-center">
                        <h2 className="text-2xl font-medium mb-4 text-shadow-sm">Exam Countdown</h2>

                          {/* Give date as YYYY-M-D */}
                            <ExamCountdown examDate="2026-2-10" />

                        </div>

                        {/* quote of the life  */}
                        <h1 className='text-neutral-500 font-mono'>The magic you are looking for is in the work you are avoiding.</h1>

                    </div>
                    

                </div>
                
                {/* github progress grid  */}
                <div className="bg-gray-50 p-3 mt-10">
                    <ProgressTracker />
                </div>
                
            </div>

        </div>
    </>
  )
}

export default Dashboard
