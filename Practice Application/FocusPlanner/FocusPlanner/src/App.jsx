import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div className='bg-gray-200 h-screen relative'>
        
        <Navbar/>
        
        {/* code start from here  */}
        <div className='h-[80%] flex gap-1'>

          {/* left box  */}
          <div className='bg-slate-500/30 backdrop-blur-sm w-[50%] flex'>
            <div className=' w-auto p-2 mt-20 h-[500px] p-10'>
              <h1 className='flex text-2xl font-medium'>Sharwan jung kunwar</h1>
              <p className='flex text-neutral-400'>Sofware enginner</p>
              <p className='text-start mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, saepe suscipit ipsa</p>
              <div className='bg-green-400 flex my-3 py-10 rounded-sm'>
                
              </div>
              <section className='flex gap-2 mt-3 text-white text-sm'>
                <button className='bg-red-400 px-10 py-1 rounded-sm'>send</button>
              <button className='bg-red-400 px-10 py-1 rounded-sm'>learn more</button>
              </section>
            </div>
          </div>

          {/* right box  */}
          <div className='bg-slate-500/30 backdrop-blur-sm w-[50%] relative'>
            <div className='bg-red-400 mt-20 h-[500px]'>
              box
            </div>
          </div>
              
        </div>

      </div>
    </>
  )
}

export default App
