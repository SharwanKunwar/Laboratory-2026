import React from 'react'
import { SparklesPreview } from '../components/ui/SparklesPreview'
import { Card, Button } from 'antd'

function Dashboard() {
  return (
    <>
        <div className='w-full h-full p-5 flex flex-col gap-5'>
            
            {/* welcome msg  */}
            <div className='h-[250px]'>
              <SparklesPreview/>
            </div>

            <div className=' h-full flex flex-col gap-5'>
              
              {/* top div  */}
              <div className='w-full h-[80%] grid grid-cols-3 items-start gap-5'>
                <Card className='bg-gray-50! h-full! rounded shadow-sm'></Card>
                <Card className='bg-gray-50! h-full! rounded shadow-sm'></Card>
                <Card className='bg-gray-50! h-full! rounded shadow-sm'></Card>
              </div>
              <div className='bg-gray-50 shadow-sm h-[20%] grid grid-cols-5 items-center gap-5 rounded px-5'>
                
              </div>
            </div>


        </div>
    </>
  )
}

export default Dashboard
