import React from 'react'
import { FiHome, FiBook, FiFileText, FiUser, FiSettings,FiAward,FiGrid,FiBookOpen , FiMail   } from 'react-icons/fi'
import ProfileCard from './components/ProfileCard'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <div className='bg-gray-400 w-screen h-screen flex gap-0'>

        {/* Left box */}
        <div className='bg-white shadow border-r border-gray-400/70 w-[20%] h-full p-5 flex flex-col justify-between'>
          
          {/* Logo and title */}
          <div className=' flex flex-col items-start gap-2'>
            <section className='flex gap-2 justify-center items-center'>
              <img src="/icons/book.png" alt="logo" width={50} className='bg-indigo-200 border border-black/20 shadow-sm rounded-sm'/>
            <h1 className='text-2xl tracking-widest font-medium'>
              <span className='text-red-400 text-shadow-sm'>B</span>
              <span className='text-green-400 text-shadow-sm'>C</span>
              <span className='text-blue-400 text-shadow-sm'>A</span>
            </h1>
            </section>

            {/* Nav list */}
          <div className='mt-5 w-full'>
            <ul className='flex flex-col gap-1'>

              <li className='flex items-center gap-2 font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400 cursor-pointer'>
                <FiGrid  size={20}/> Dashboard
              </li>
              <li className='flex items-center gap-2 font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400 cursor-pointer'>
                <FiBookOpen   size={20}/> BCA Program
              </li>
              <li className='flex items-center gap-2 font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400 cursor-pointer'>
                <FiBook size={20}/> Library
              </li>
              <li className='flex items-center gap-2 font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400 cursor-pointer'>
                <FiFileText size={20}/> PYQs
              </li>
              <li className='flex items-center gap-2 font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400 cursor-pointer'>
                <FiUser size={20}/> Profile
              </li>
              
              <li className='flex items-center gap-2 font-medium hover:bg-gray-200 hover:shadow rounded-md py-2 px-2 text-neutral-500 hover:text-indigo-400 cursor-pointer'>
                <FiSettings size={20}/> Settings
              </li>
            </ul>
          </div>
          </div>

          <div className=' border-t border-black/30 pt-5'>
            <ProfileCard/>
          </div>

        </div>


        {/* // right part ---------------------------------------------------------------------------------- */}

        {/* Right box */}
        <div className='bg-gray-50 w-[80%] h-full '>
          <Dashboard/>
        </div>

      </div>
    </>
  )
}

export default App
