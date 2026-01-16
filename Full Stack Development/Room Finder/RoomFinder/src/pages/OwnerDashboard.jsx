import React from 'react'
import OwnerNavbar from '../components/OwnerNavbar'
import { Button } from 'antd';
import { MdVerified, MdHome } from "react-icons/md";

import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import DashboardOwner from '../ownerPages/DashboardOwner';
// import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link,Outlet } from 'react-router-dom';




function OwnerDashboard() {
  return (
    <>
      <div className=' w-screen h-screen'>
        
        <div className='pt-5 px-10 bg-slate-200 w-screen h-screen flex gap-5'>

          {/* left for nav list  */}
          <div className=' w-[30%]'>
            {/* img and name and tag  */}
            <div className='flex justify-start h-[10%] items-center gap-3 py-3 border-b border-black/30'>
              <img src="/avatar/profile01.jpg" alt="img" className='w-[50px] h-[50px] bg-indigo-400/30 backdrop-blur-sm p-0.5 shadow-sm rounded-full'/>
              <div className='relative'>
                <h1 className='text-2xl font-medium'>sharwan Jung kunwar</h1>
                <p className='text-neutral-400'>Room Owner</p>
                <div className=' w-[15px] h-[15px] rounded-full -top-0 -right-4 absolute'>
                  <MdVerified size={15} className="text-blue-500" />
                </div>
              </div>
            </div>
            {/* nav list */}
              <div className=' h-[90%] flex flex-col justify-between pb-10'>
                <div className="bg-white h-50 rounded-md p-5 shadow mt-5">
                <ul className="w-full h-full flex flex-col justify-between text-gray-700 ">            
                    <Link 
                      to="/owner/dashboardOwner"
                      className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                        <MdDashboard size={22} />
                          Dashboard
                    </Link>

                    <Link 
                    to="/owner/messages"
                    className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                    <FaEnvelope size={18} />
                        Message
                    </Link>

                    <Link 
                    to="/owner/profile"
                    className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                    <CgProfile size={20} />
                        Profile
                    </Link>

                    <Link 
                    to="/owner/ownerSettings"
                    className="flex items-center gap-3 cursor-pointer p-2 hover:text-indigo-500 hover:bg-gray-100 hover:backdrop-blur-sm hover:rounded-sm transition">
                    <IoSettingsSharp size={20} />
                        Settings
                    </Link>
                </ul>
                
              </div>
              <div className=''>
                <Button className='w-full' size='large'><MdLogout size={22} />Log out</Button>
              </div>
              </div>
          </div>





          {/* right for dashboard  */}
          <div className=' w-[70%] border-l border-black/30 relative overflow-y-scroll hide-scrollbar'>
              <Outlet/>
          </div>



        </div>
      </div>
    </>
  )
}

export default OwnerDashboard