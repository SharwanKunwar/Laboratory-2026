import React from 'react'

function Navbar() {
  return (
    <>
        <div className='bg-gray-50 w-full h-[60px] absolute top-0 shadow flex gap-3 px-5'>

            {/* left  */}
            <div className=' w-[50%] flex items-center  gap-3'>
                <img src="vite.svg" alt="logo" className='bg-white p-2 rounded-sm'/>
                <h1 className='text-xl'>Rap<span className='text-yellow-400 font-medium'>Book</span></h1>
            </div>

            {/* right  */}
            <div className=' w-[50%] flex justify-end gap-5 items-center'>
                <ul className='flex justify-around items-center h-full gap-5 w-[35%]'>
                    <li className='hover:text-indigo-400 '>Home</li>
                    <li className='hover:text-indigo-400 '>Contact</li>
                    <li className='hover:text-indigo-400 '>Service</li>
                </ul>
                
                <div className='bg-indigo-400/60 backdrop-blur-sm px-2 rounded-full w-[40px] h-[40px] relative'>
                    <div className='bg-green-400 w-[15px] h-[15px] rounded-full absolute top-0 -right-1 bottom-0'></div>
                </div>
                <img src="vite.svg" alt="img" className='bg-indigo-400/30 backdrop-blur-sm rounded-sm p-1 h-[70%]'/>
            </div>

        </div>
    </>
  )
}

export default Navbar