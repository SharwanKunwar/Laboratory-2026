import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TbRulerMeasure } from "react-icons/tb";
import { Button } from "antd";

function OwnerRoomCard() {
  const [available, setAvailable] = useState(true);

  return (
    <div className="w-full bg-white rounded-sm p-4 flex gap-4 shadow-md text-black">
      
      {/* Image */}
      <div className=" h-full rounded-lg overflow-hidden relative flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          alt="room"
          className="w-75 object-cover"
        />
        <span className="absolute top-2 left-2 text-xs bg-white text-black px-2 py-[2px] rounded">
          FLAT
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 ">
        <h2 className="text-lg font-semibold">
          2BHK Apartment in New Baneshwor
        </h2>

        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
          <MdLocationOn size={16} />
          New Baneshwor, Kathmandu
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mt-3">
          <span className="flex items-center gap-1">
            <IoBedOutline /> 2 Bed
          </span>
          <span className="flex items-center gap-1">
            <LuBath /> 1 Bath
          </span>
          <span className="flex items-center gap-1">
            <TbRulerMeasure /> 850 sqft
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-400">Monthly Rent</p>
        <p className="text-blue-400 font-semibold text-lg">
          NPR 25,000
        </p>
        <Button className="mt-5 px-15! bg-indigo-400! text-white!">View Details</Button>
        <Button className="mt-5 px-15! bg-indigo-400! text-white! ml-3">asdf</Button>
      </div>

      {/* Availability Toggle */}
      <div className="flex flex-col justify-between items-end">
        <span
          className={`text-sm font-medium ${
            available ? "text-green-400" : "text-red-400"
          }`}
        >
          {available ? "Available" : "Not Available"}
        </span>

          <label className="inline-flex items-center cursor-pointer mt-2">
            <input
              type="checkbox"
              className="sr-only"
              checked={available}
              onChange={() => setAvailable(!available)}
            />
            <div
              className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${
                available ? "bg-blue-500" : "bg-gray-500"
              }`}
            >
              <div
                className={`absolute top-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  available ? "right-[2px]" : "left-[2px]"
                }`}
              ></div>
            </div>
          </label>



      </div>
    </div>
  );
}

export default OwnerRoomCard;
