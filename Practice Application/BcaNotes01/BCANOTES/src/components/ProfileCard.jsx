import React from 'react'
import { Button } from 'antd'

function ProfileCard() {
  return (
    <>
        <div className='bg-gray-200 w-full h-full rounded-sm shadow-md p-2 py-3'>
            <div className='flex gap-3 items-center'>
                <img src="/vite.svg" alt="" className='p-2 bg-indigo-400 rounded-full'/>
                <section>
                    <h1 className='text-lg tracking-tight font-medium'>Sharwan jung kunwar</h1>
                    <p className='text-neutral-400'>Semister III</p>
                </section>
            </div>
            <Button className='w-full mt-5' size='large'>Logout</Button>
            
        </div>
    </>
  )
}

export default ProfileCard
