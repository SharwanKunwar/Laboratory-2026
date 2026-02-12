import React from 'react'

function Planner() {
  return (
    <>
        <div className='w-screen h-screen p-5'>
            <iframe
                src="https://focus-ten-omega.vercel.app/Focus/higher"
                title="Todo App"
                className="w-full h-full border-none rounded-md"                            
            />
        </div>
    </>
  )
}

export default Planner
