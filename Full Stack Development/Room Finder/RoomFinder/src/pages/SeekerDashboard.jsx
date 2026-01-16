// import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { MdVerified, MdHome } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import SmallFilter from '../components/SmallFilter'
import { Button, Modal } from 'antd';
import FilterDrawer from '../components/FilterDrawer';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

function SeekerDashboard() {
const [isFilterOpen, setIsFilterOpen] = useState(false);



  return (
    <>
      <Navbar/>

      <div className="bg-slate-300 w-screen h-screen pt-15 flex">

        {/* LEFT SIDEBAR */}
        <div className="w-[30%] pl-10 flex flex-col gap-5 py-10 overflow-y-scroll hide-scrollbar">

          {/* PROFILE CARD */}
          <div className="bg-white rounded-md shadow py-5">
            <div className="flex px-5 gap-3 items-center">
              <img
                src="/avatar/profile02.jpg"
                alt="profile"
                className="cursor-pointer bg-[#F9AC46]/30 backdrop-blur-2xl p-1 rounded-md w-[60px] h-[60px]"
              />
              <div>
                <h1 className="text-2xl">Welcome ?</h1>
                <p className="text-[#4D9FF1]">Complete Your Profile</p>
              </div>
            </div>

            <div className="bg-[#EFF6FF] mx-5 mt-5 rounded-md p-2 flex gap-3">
              <MdVerified size={20} className="text-blue-500 mt-1" />
              <p className="text-neutral-500">
                Verify Your Profile to get <span className="text-black">3X more replies</span> from landlords.
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="bg-white rounded-md p-5 shadow">
            <ul className="flex flex-col gap-2 text-gray-700">

              <Link
                to="/seeker/feed"
                className="flex items-center gap-3 p-2 rounded-sm hover:text-indigo-500 hover:bg-gray-100 transition"
              >
                <MdHome size={22} /> Feed
              </Link>

              <Link
                to="/seeker/savedRoom"
                className="flex items-center gap-3 p-2 rounded-sm hover:text-indigo-500 hover:bg-gray-100 transition"
              >
                <FaBookmark size={18} /> Saved Room
              </Link>

              <Link
                to="/seeker/MyRoom"
                className="flex items-center gap-3 p-2 rounded-sm hover:text-indigo-500 hover:bg-gray-100 transition"
              >
                <HiClipboardList size={20} /> My Room
              </Link>

              <Link
                to="/seeker/settings"
                className="flex items-center gap-3 p-2 rounded-sm hover:text-indigo-500 hover:bg-gray-100 transition"
              >
                <IoSettingsSharp size={20} /> Settings
              </Link>

            </ul>
          </div>

          {/* FILTER */}
          <div className="bg-white rounded-md shadow p-4 flex flex-col gap-3">
            <SmallFilter />

            <Button
              type="primary"
              onClick={() => setIsFilterOpen(true)}
            >
              More Filters
            </Button>
          </div>

          <FilterDrawer
            open={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onApply={(filters) => {
              console.log("Applied Filters:", filters);
            }}
          />


          <div className='bg-white mt-5 shadow-md rounded-sm'>
            <div className='h-[200px] flex justify-center items-center'>. . .</div>
          </div>

          <Button size="large" className="mt-5 py-2!">
            Log out
          </Button>

        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[70%] px-10 py-10 overflow-y-scroll hide-scrollbar">
          <Outlet />
        </div>

      </div>

      
    </>
  );
}

export default SeekerDashboard;
