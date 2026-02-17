import React from 'react'
import { Button, Select, DatePicker} from 'antd'
import { Plus, Trash2 } from "lucide-react";

import { useState } from "react";
// import dayjs from "dayjs";


const { Option } = Select;

function Navbar() {
     const [priority, setPriority] = useState(null);

    const onSelect = (value) => {
        console.log("Selected Date: ", value.format("YYYY-MM-DD"));
    };

  return (
    <>
        <div className='absolute bg-gray-50/30 backdrop-blur-sm border-b border-white/50 shadow-sm h-17.5 flex gap-1 top-0 right-0 w-full'>

            {/* Left Div */}
            <div className="w-[20%] h-full pl-5 flex justify-start items-center "> 
                <div className='w-50'>
                    <Select
                    placeholder="Choose Priority"
                    size="large"
                    className="w-full"
                    value={priority}
                    onChange={(value) => setPriority(value)}
                    >
                        <Option value="high">🔴 Highest Priority</Option>
                        <Option value="medium">🟡 Medium Priority</Option>
                        <Option value="low">🟢 Lower Priority</Option>
                    </Select>
                </div>
            </div>


            {/* right div  */}
            <div className=' w-[80%] h-full flex justify-end items-center px-5 gap-5 z-40'>
                <div>
                    <DatePicker
                        size="large"
                        className="w-50 rounded-xl shadow"
                        placeholder="Select Date"
                    />
                </div>
                <Button size="large" className="px-10! flex items-center gap-2 shadow"> <Plus size={18} /> Add Task </Button>
                <Button size="large" className="px-10! flex items-center gap-2 shadow"> <Trash2 size={18} /> Delete All </Button>
                <img src="vite.svg" alt="icons" className='bg-yellow-400 py-2 px-2 rounded-full border border-white/30 shadow'/>
            </div>

        </div>
    </>
  )
}

export default Navbar
