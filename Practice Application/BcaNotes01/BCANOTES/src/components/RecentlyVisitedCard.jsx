import React from 'react'
import { Button } from 'antd'

function RecentlyVisitedCard() {
  return (
    <>
        <div className='bg-gray-50 w-75 rounded-md flex flex-col gap-2 p-2'>
            <div className=' w-full h-75'>
                <img src="" alt="Book image" className='bg-linear-to-br from-indigo-400 to-pink-400 rounded-md w-full h-full'/>
            </div>
            <div className=' h-full'>
                <h1 className='text-lg font-medium'>Java Programming</h1>
                <p className='text-neutral-400'>Unit 3: Object-Oriented Principle</p>
                <div className=' h-full mt-4 border-t border-black/15'>
                    <div className=' flex justify-between px-1 items-center w-full py-1.5 mt-1'>
                        <h1 className='text-neutral-400 text-sm'>Last opended: 2h ago</h1>
                        <img src="/icons/play.png" alt="" width={40} className='shadow-sm rounded-md bg-linear-to-bl from-indigo-400 to-pink-400 via-orange-400 hover:bg-linear-to-br hover:from-indigo-400 hover:to-green-400'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RecentlyVisitedCard
