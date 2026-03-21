import React from 'react'

function Navbar() {
  return (
    <>
        <div className=' h-[60px]  w-full flex items-center gap-1'>

            {/* left box  */}
            <div className=' w-[50%] flex px-5'>
                <div className='bg-white w-[50px] h-[40px] rounded-sm'></div>
            </div>
            {/* right box  */}
            <div className=' w-[50%] flex justify-end items-center px-5'>
                <div className='bg-white w-[50px] h-[40px] rounded-sm'></div>
            </div>

        </div>
    </>
  )
}

export default Navbar
