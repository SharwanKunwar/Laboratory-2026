import { Button, Input, Modal } from 'antd';
import { FiSearch, FiBell } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <div className='bg-[#F6F7F8] w-full h-20 absolute top-0 shadow flex z-50'>
        {/* LEFT */}
        <div className='w-[60%] h-full flex gap-5 pl-10'>
          {/* Logo and text */}
          <div className='flex justify-start items-center gap-3'>
            <img src="/Logo/Logo01.png" alt="logo" className='w-[50px] h-[50px]'/>
            <h1 className='text-2xl font-medium'>Room<sapn className="text-orange-400">Finder</sapn></h1>
          </div>
          {/* Search bar */}
          <div className="flex items-center">
            <Input
              placeholder="Search rooms, locations..."
              prefix={<FiSearch className="text-gray-400 mr-2" />}
              className="py-2! rounded-sm w-87.5!"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className='w-[40%] h-full flex justify-end items-center px-10'>
          {/* Buttons */}
          <div className=' flex gap-5 items-center justify-end '>
            <div className='bg-white w-10 h-10 rounded-full shadow relative flex justify-center items-center'>
              <FiBell size={24} className="text-gray-700 cursor-pointer hover:text-blue-500" />
              <div className='absolute -top-1 -right-1 rounded-full bg-red-500 w-4 h-4 flex justify-center items-center p-1'>
                <span className='text-[10px] text-white'>3</span>
              </div>
            </div>

            {/* Profile Image */}
            <div 
              className='bg-linear-to-br from-orange-400 to-pink-400 via-indigo-400 w-12 h-12 rounded-full shadow overflow-hidden cursor-pointer p-1'
              onClick={() => setIsProfileOpen(true)}
            >
              <img src="/avatar/profile02.jpg" alt="profile" className='rounded-full w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <Modal
        title="My Profile"
        open={isProfileOpen}
        onCancel={() => setIsProfileOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsProfileOpen(false)}>
            Close
          </Button>
        ]}
      >
        <div className="flex flex-col items-center gap-4">
          <img src="/avatar/profile02.jpg" alt="profile" className='w-24 h-24 rounded-full object-cover'/>
          <h2 className="text-xl font-semibold">Sharwan Jung Kunwar</h2>
          <p className="text-gray-500 text-center">
            Room Seeker / Full Stack Developer / Interested in web and app development
          </p>
          <div className="flex gap-3 mt-3">
            <Button type="primary">Edit Profile</Button>
            <Button danger>Logout</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
