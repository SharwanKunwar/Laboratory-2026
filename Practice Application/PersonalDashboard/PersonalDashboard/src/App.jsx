import React, { useState } from 'react';
import { FiHome, FiEdit, FiArchive, FiCheckSquare, FiClock, FiList, FiUser, FiGrid } from 'react-icons/fi';
import Navbar from './components/Navbar';
import { Link, Outlet } from 'react-router-dom';

const navItems = [
    { icon: <FiGrid />, label: 'Dashboard', path:"dashboard" },          // Dashboard/Home
    { icon: <FiEdit />, label: 'Compose Task', path:"composeTask" },      // Writing/Editing task
    { icon: <FiArchive />, label: 'Assets', path:"assets" },         // Storage/Assets
    { icon: <FiCheckSquare />, label: 'View All Task', path:"viewAllTask" }, // Task list / Completed tasks
    { icon: <FiClock />, label: 'Lifetime', path:"lifeTime" },         // History / Time
    { icon: <FiList />, label: 'Bucket List', path:"wishList" },       // List / Plans
    { icon: <FiUser />, label: 'MySelf', path: "mySelf" },            // User profile / Myself
];



function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gradient-to-bl from-slate-400 to-sky-400 w-screen h-screen flex justify-center items-center'>
      <div className='bg-white/30 backdrop-blur-sm border border-white/50 w-[98%] h-[95%] rounded-xl flex overflow-hidden'>

        {/* Sidebar */}
        <div
          className={`h-full transition-all duration-300 ${
            isOpen ? 'w-60' : 'w-17'
          } flex flex-col justify-between`}
        >
          {/* Top section: Logo + Nav */}
          <div>
            {/* Logo + Site Name */}
            <div className='flex items-center gap-2 p-3 py-3.5 border-b border-white/50 justify-start shadow-sm'>
              {/* Logo */}
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-white/70 flex items-center justify-center'>
                <img src="/vite.svg" alt="logo" className='w-full h-full p-1' />
              </div>

              {/* Text */}
              <span
                className={`font-medium text-black transition-opacity duration-300 overflow-hidden ${
                  isOpen ? 'opacity-100' : 'opacity-0 w-0'
                }`}
              >
                Planner
              </span>
            </div>


            {/* Navigation List */}
            <nav className='flex flex-col mt-2'>
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center p-3 hover:bg-white/20 cursor-pointer gap-0 h-12.5'
                >
                  {/* Icon */}
                  {isOpen ? 
                    <Link to={item.path}>
                      <div className='text-white bg-slate-400 py-2 px-2 rounded text-xl flex-shrink-0'>
                      {item.icon} 
                  </div>
                    </Link>
                  :
                  <Link to={item.path}>
                   <div className='text-slate-600 bg-slate-300 rounded  text-2xl py-2 px-2 flex-shrink-0'>
                    {item.icon}
                  </div>
                  </Link>
                  }


                  {/* Label */}
                  <Link to={item.path}>
                  <span
                    className={`text-white py-2 px-2 rounded w-full font-medium transition-all duration-300 overflow-hidden whitespace-nowrap ${
                      isOpen ? 'opacity-100 w-auto ml-2' : 'opacity-0 w-0 ml-0'
                    }`}
                  >
                    {item.label}
                  </span>
                  </Link>
                </div>
              ))}
            </nav>

          </div>

          {/* Bottom section: Toggle button */}
          <div className='p-4 border-t border-white/50 flex justify-center'>
            <button
              className='bg-white/50 rounded p-1 w-full'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '<' : '>'}
            </button>
          </div>
        </div>

        {/* Main content ----------------------------------------------------------------------------------------------------------------*/}
        <div className='flex-1 border-l border-white/30 relative'>

          {/* // navbar */}
          

          {/* // main content here  */}
          <div className=' w-full h-full'>
            {/* this is outlet  ---------------*/}
            <div className=' w-full h-full'>
              <Outlet/>
            </div>
          </div>
          
        </div>


      </div>
    </div>
  );
}

export default App;
