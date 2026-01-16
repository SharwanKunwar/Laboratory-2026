import { Button } from 'antd'
import React from 'react'

function RapCard(props) {
  return (
    <>  
        <div className=' w-full h-[350px] flex gap-1'>
            {/* left  */}
            <div className='w-[50%] bg-red-400 relative'>
                <img src="/img/pic03.jpg" alt="img" className='w-full h-full object-cover rounded-sm'/>
            </div>
            

            {/* right  */}
            <div className='w-[50%] p-5 flex flex-col gap-1 justify-around'>
                <section>
                    <h1 className='text-xl font-medium'>{props.name}</h1>
                    <p className='text-neutral-400'>{props.date} - {props.location}</p>
                </section>
                
                <p className=''>{props.des}</p>
                <Button>View More</Button>
            </div>

        </div>
    </>
  )
}

export default RapCard