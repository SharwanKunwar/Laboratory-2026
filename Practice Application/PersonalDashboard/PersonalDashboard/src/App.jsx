import React, { useState } from 'react';
import { FiHome, FiPhone, FiBox, FiHeart, FiClock, FiList, FiUser } from 'react-icons/fi';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { icon: <FiHome/>, label: 'Overview' },
    { icon: <FiPhone />, label: 'Contact' },
    { icon: <FiBox />, label: 'Assets' },
    { icon: <FiHeart />, label: 'Healthcare' },
    { icon: <FiClock />, label: 'Lifetime' },
    { icon: <FiList />, label: 'Bucket List' },
    { icon: <FiUser />, label: 'MySelf' },
  ];

  return (
    <div className='bg-gradient-to-bl from-slate-400 to-sky-400 w-screen h-screen flex justify-center items-center'>
      <div className='bg-white/30 backdrop-blur-sm border border-white/50 w-[95%] h-[90%] rounded-2xl flex overflow-hidden'>

        {/* Sidebar */}
        <div
          className={`h-full transition-all duration-300 ${
            isOpen ? 'w-60' : 'w-17'
          } flex flex-col justify-between`}
        >
          {/* Top section: Logo + Nav */}
          <div>
            {/* Logo + Site Name */}
            <div className='flex items-center gap-2 p-4 border-b border-white/50 justify-start'>
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
                Tracker
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
                    <div className='text-white bg-slate-400 py-2 px-2 rounded text-xl flex-shrink-0'>
                    {item.icon}
                  </div>
                  :
                   <div className='text-white bg-slate-400 rounded  text-2xl py-2 px-2 flex-shrink-0'>
                    {item.icon}
                  </div>}

                  {/* Label */}
                  <span
                    className={`text-white bg-slate-400 py-2 px-2 rounded w-full font-medium transition-all duration-300 overflow-hidden whitespace-nowrap ${
                      isOpen ? 'opacity-100 w-auto ml-2' : 'opacity-0 w-0 ml-0'
                    }`}
                  >
                    {item.label}
                  </span>
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
        <div className='flex-1 px-5 border-l border-white/30 py-5'>
              <div className='bg-gray-50 w-full h-[25%] rounded-lg p-5'>
                <div className='bg-red-400 w-full h-full rounded-md'>box</div>
              </div>

              <div className='bg-gray-50 w-full h-[20%] rounded-lg '>
                box
              </div>

              <div className='bg-gray-50 w-full h-[50%] rounded-lg '>
                box
              </div>

        </div>


      </div>
    </div>
  );
}

export default App;
