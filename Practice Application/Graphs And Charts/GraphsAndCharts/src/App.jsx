import React from 'react'
import Pie01 from './components/charts/Pie01'
import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <div className='bg-gray-50 w-screen h-screen p-5 flex gap-2'>

        {/* left  */}
        <div className='w-[30%] h-full bg-gray-50 p-3'>
          <ul className=' h-full flex flex-col gap-3 text-white'>
            <h1 className='text-xl mb-5 text-black font-medium'>Explore Different charts and graphs</h1>
            <Link to="demo01">
              <li className='bg-gray-400 rounded-sm py-2 px-5 shadow'>Demo01</li>
            </Link>
            <Link to="demo02">
              <li className='bg-gray-400 rounded-sm py-2 px-5 shadow'>Demo02</li>
            </Link>
            <Link to="demo03">
              <li className='bg-gray-400 rounded-sm py-2 px-5 shadow'>Demo03</li>
            </Link>
          </ul>
        </div>

        {/* right  */}
        <div className='w-[70%] h-full bg-slate-400 flex justify-center items-center'>
          <Outlet/>
        </div>

      </div>
    </>
  )
}

export default App