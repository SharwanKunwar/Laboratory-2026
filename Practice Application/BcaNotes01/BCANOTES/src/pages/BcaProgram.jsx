import { Button, Select} from 'antd'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { FiSearch,FiBell, FiCalendar } from 'react-icons/fi'
import { Link, Outlet } from 'react-router-dom';

const years = [
  { value: '1st', label: '2022' },
  { value: '2nd', label: '2023' },
  { value: '3rd', label: '2024' },
  { value: '4th', label: '2025' },
  { value: '5th', label: '2026' },
];

function BcaProgram() {
  return (
    <>
        <div className='w-screen h-screen'>
            
            {/* // navbar  */}
            <div className='absolute w-full h-16 border-b border-black/10 shadow-sm flex gap-0 z-50'>
                {/* logo and title  */}
                <div className='bg-white w-[50%] h-full px-5 flex justify-start items-center'>
                    <section className='flex gap-2 justify-center items-center'>
                        <img src="/icons/book.png" alt="logo" width={50} className='bg-indigo-200 border border-black/20 shadow-sm rounded-sm'/>
                        <h1 className='text-2xl tracking-widest font-medium'>
                        <span className='text-red-400 text-shadow-sm'>B</span>
                        <span className='text-green-400 text-shadow-sm'>C</span>
                        <span className='text-blue-400 text-shadow-sm'>A</span>
                        <span className='text-sm text-neutral-400'> Student Portal</span>
                        </h1>
                    </section>
                    
                </div>
                {/* // nav list and other icons  */}
                <div className='bg-white w-[50%] h-full flex gap-5 justify-end items-center px-10'>
                    <ul>
                        <Link to="/">
                            <li>Dashboard</li>
                        </Link>
                    </ul>
                    <FiBell className='text-gray-400 cursor-pointer' size={24} />
                    <img src="/vite.svg" alt="profile" className='bg-green-400 shadow-sm p-1 rounded-full object-cover'/>
                </div>
            </div>





            {/* // content  ----------------------------------------------------------------------------------*/}

            <div className='bg-gray-50 w-full h-full pt-15 flex gap-1'>

                {/* // left div filters and search */}
                <div className=' w-[20%] h-full p-5 flex flex-col gap-3'>
                    {/* // search bar code start from here-----------------*/}
                    <div className=''>
                        <div className='flex items-center bg-gray-200 rounded-md px-3 py-2 w-full shadow-sm'>
                            <FiSearch className='text-gray-400 hover:text-indigo-400' size={20}/>
                            <input 
                            type="text" 
                            placeholder="Search subjects" 
                            className='ml-2 w-full outline-none text-gray-700 placeholder-gray-400'
                            />
                        </div>
                    </div>
                    {/* // search bar code end from here----------------- */}

                    {/* Select Semester code start from here ------------------------------- */}
                    <div className='mt-5'>
                        <h1 className='text-md font-medium'>Select Semester</h1>
                        <div className='grid grid-cols-2  gap-3 mt-3'>
                            <Button size='large'>Semester 1</Button>
                            <Button size='large'>Semester 2</Button>
                            <Button size='large'>Semester 3</Button>
                            <Button size='large'>Semester 4</Button>
                            <Button size='large'>Semester 5</Button>
                            <Button size='large'>Semester 6</Button>
                            <Button size='large'>Semester 7</Button>
                            <Button size='large'>Semester 8</Button>
                        </div>
                    </div>
                    {/* Select Semester code end from here ------------------------------- */}
                    <div className='mt-5'>
                        <section className='flex gap-2 justify-start items-center'>
                             <FiCalendar size={20}/> 
                            <h1 className='text-md font-medium'>Year Range</h1>
                        </section>
                        
                        <div className='mt-1'>
                            <div className="">
                            <Select
                                placeholder="Select Year"
                                style={{ width: 200 }}
                                options={years}
                                onChange={(value) => console.log(value)}
                                className='w-full! mt-2!'
                                size='large'
                            />
                            </div>
                        </div>
                        
                    </div>


                </div>

                {/* // content outlet  */}
                <div className='bg-red-500 w-[80%] h-full'>
                    <Outlet/>
                </div>

            </div>

            {/* // content  ----------------------------------------------------------------------------------*/}
        </div>
    </>
  )
}

export default BcaProgram
