import React from 'react'
import { SparklesPreview } from '../components/ui/SparklesPreview'

function Dashboard() {
  return (
    <>
        <div className='w-full h-full p-5 flex flex-col gap-5'>
            
            {/* welcome msg  */}
            <div className='h-[250px]'>
              <SparklesPreview/>
            </div>

            <div className='bg-red-400 h-full flex gap-1'>
              <div className='bg-yellow-400 w-[300px] h-[200px]'>
                box
              </div>
            </div>


        </div>
    </>
  )
}

export default Dashboard
