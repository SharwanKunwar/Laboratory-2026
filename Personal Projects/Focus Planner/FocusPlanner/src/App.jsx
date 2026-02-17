import React, { useState } from 'react';
import { FiHome, FiEdit, FiArchive, FiCheckSquare, FiClock, FiList, FiUser, FiChevronLeft, FiChevronRight, FiGrid } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';

const navItems = [
  { icon: <FiGrid />, label: 'Dashboard', path:"dashboard"},
  { icon: <FiEdit />, label: 'Compose Task', path:"composeTask"},
  { icon: <FiArchive />, label: 'Assets', path:"assets"},
  { icon: <FiCheckSquare />, label: 'View All Task', path:"viewAllTask"},
  { icon: <FiClock />, label: 'Lifetime', path:"lifeTime"},
  { icon: <FiList />, label: 'Bucket List', path:"bucketList"},
  { icon: <FiUser />, label: 'MySelf', path:"mySelf"},
];

function App() {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Sidebar open/close

  return (
    <div className='bg-linear-to-br from-indigo-400 to-pink-400 w-screen h-screen flex justify-center items-center'>
      <div className='bg-white/30 backdrop-blur-sm w-[98%] h-[95%] rounded-lg shadow border border-white/50 flex'>

        {/* Left Sidebar */}
        <div
          className={`h-full flex flex-col justify-start gap-5 relative
            transition-all duration-300 ease-in-out
            ${isOpen ? 'w-[20%]' : 'w-19.5'}
          `}
        >

          {/* Top: Logo */}
          <div className={`flex items-center gap-2 px-3.5 p-3 transition-all duration-300 border-b border-white/50`}>
            <img
              src="vite.svg"
              alt="logo"
              className={`bg-indigo-700 p-2 rounded shadow transition-all duration-300
                ${isOpen ? 'w-12 h-12' : 'w-12 h-12'}
              `}
            />
            <div
              className={`overflow-hidden transition-[max-width,opacity] duration-300 ease-in-out
                ${isOpen ? 'max-w-75 opacity-100' : 'max-w-0 opacity-0'}
              `}
            >
              <h1 className='font-bold text-shadow-sm text-white text-xl ml-2'>Planner</h1>
            </div>
          </div>

          {/* Navigation Items */}
          <div className='flex flex-col gap-3 px-2.5 '>
            {navItems.map((item, index) => (
                <Link to={item.path} key={index}>
              <div
                key={index}
                onClick={() => setActive(item.label)}
                className={`flex items-center justify-start  gap-2 cursor-pointer rounded transition duration-200 text-sm font-medium w-full h-11.25 pl-4 
                  ${active === item.label ? "bg-white text-black shadow" : "hover:bg-white/40 text-white"}
                  
                `}
              >
                {/* Icon fixed */}
              
                  <div className='flex justify-center items-center '>
                  <span className='text-2xl'>{item.icon}</span>
                </div>
                
                {/* Label smooth animation */}
                
                <div
                  className={`overflow-hidden transition-[max-width,opacity] duration-300 ease-in-out
                    ${isOpen ? 'max-w-75 opacity-100' : 'max-w-0 opacity-0'}
                  `}
                >
                  <span className='ml-2'>{item.label}</span>
                </div>
                
              </div>
              </Link>
            ))}
          </div>

          {/* Bottom: Toggle Button */}
          <div className='flex justify-center mb-4 absolute bottom-0 left-0 w-full'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='bg-white/30 backdrop-blur-sm p-2 rounded-md hover:bg-white/50 transition flex justify-center items-center w-full mx-3'
            >
              {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
            </button>
          </div>
        </div>



        {/* Right Content / main content*/}
        <div className='flex-1 h-full w-full text-white transition-all duration-300 border-l border-white/50 relative'>
          <Outlet/>
        </div>

      </div>
    </div>
  );
}

export default App;
