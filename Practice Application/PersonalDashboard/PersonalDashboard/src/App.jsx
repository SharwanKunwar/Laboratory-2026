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
          className={`bg-yellow-400 h-full transition-all duration-300 ${
            isOpen ? 'w-60' : 'w-15'
          } flex flex-col justify-between`}
        >
          {/* Top section: Logo + Nav */}
          <div>
            {/* Logo + Site Name */}
            <div className='flex items-center gap-2 p-4 border-b border-white/50 justify-start'>
              {/* Logo */}
              <div className='flex-shrink-0 w-8 h-8 rounded-full bg-white/70 flex items-center justify-center'>
                <img src="/vite.svg" alt="logo" className='w-6 h-6' />
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
                    <div className='text-black bg-white py-2 px-2 rounded text-xl flex-shrink-0'>
                    {item.icon}
                  </div>
                  :
                   <div className='text-black bg-white py-1 rounded  text-2xl py-2 px-1.5 flex-shrink-0'>
                    {item.icon}
                  </div>}

                  {/* Label */}
                  <span
                    className={`text-black bg-white py-2 px-2 rounded w-full font-medium transition-all duration-300 overflow-hidden whitespace-nowrap ${
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

        {/* Main content */}
        <div className='flex-1 p-4'>Right Content</div>
      </div>
    </div>
  );
}

export default App;
