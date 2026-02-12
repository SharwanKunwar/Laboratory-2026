import React from "react";
import {
  Search,
  Mic,
  Cloud,
  Mail,
  Phone,
  Play,
  Send,
  Sparkles,
  X
} from "lucide-react";

const FocusDash = () => {
  return (
    <div className="min-h-screen bg-[#e6ebf2] flex flex-col justify-between px-16 py-10 font-sans text-gray-700">

      {/* Top Section */}
      <div className="flex justify-between items-start">

        {/* Logo */}
        <div className="px-6 py-3 rounded-full bg-[#e6ebf2] shadow-[8px_8px_16px_#cfd6df,-8px_-8px_16px_#ffffff] flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <span className="font-semibold text-lg">FocusDash</span>
        </div>

        {/* Weather Circle */}
        <div className="relative w-64 h-64 rounded-full bg-[#e6ebf2] shadow-[15px_15px_30px_#cfd6df,-15px_-15px_30px_#ffffff] flex flex-col items-center justify-center">
          <p className="text-blue-400 tracking-widest text-sm">KATHMANDU</p>
          <h1 className="text-5xl font-light">15°C</h1>
          <Cloud className="text-blue-400 mt-2" />
          <p className="mt-2 text-gray-500">Mist</p>
          <div className="mt-3 px-4 py-1 rounded-full bg-[#e6ebf2] shadow-inner text-sm">
            HUMIDITY 67%
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center justify-between mt-10">

        {/* Clock */}
        <div className="w-96 h-96 rounded-full bg-[#e6ebf2] shadow-[20px_20px_40px_#cfd6df,-20px_-20px_40px_#ffffff] flex items-center justify-center">
          <div className="w-72 h-72 rounded-full bg-[#e6ebf2] shadow-inner relative">
            {/* Clock Hands */}
            <div className="absolute w-1 h-24 bg-blue-500 top-1/4 left-1/2 -translate-x-1/2 rounded-full"></div>
            <div className="absolute w-1 h-32 bg-blue-600 bottom-1/4 left-1/2 -translate-x-1/2 rounded-full"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-[45%]">

          <h1 className="text-4xl font-light text-gray-400">
            Good Afternoon.
          </h1>
          <h2 className="text-4xl font-semibold mt-2">
            What's on your mind?
          </h2>

          {/* Search Engines */}
          <div className="flex gap-4 mt-6">
            {["Google", "DuckDuckGo", "Bing", "Brave", "YouTube"].map(
              (engine, index) => (
                <button
                  key={index}
                  className={`px-5 py-2 rounded-full text-sm shadow-[6px_6px_12px_#cfd6df,-6px_-6px_12px_#ffffff] ${
                    index === 0
                      ? "bg-blue-500 text-white"
                      : "bg-[#e6ebf2]"
                  }`}
                >
                  {engine}
                </button>
              )
            )}
          </div>

          {/* Search Bar */}
          <div className="mt-8 flex items-center bg-[#e6ebf2] px-6 py-3 rounded-full shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search the web or type a URL..."
              className="flex-1 bg-transparent outline-none px-4"
            />
            <Mic size={20} className="text-gray-400 mr-4" />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end mt-16">

        {/* AI Tools */}
        <div className="px-6 py-3 rounded-full bg-[#e6ebf2] shadow-[8px_8px_16px_#cfd6df,-8px_-8px_16px_#ffffff] flex items-center gap-3">
          <Sparkles size={18} className="text-blue-500" />
          <span>AI Tools</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 px-10 py-4 rounded-full bg-[#e6ebf2] shadow-[12px_12px_24px_#cfd6df,-12px_-12px_24px_#ffffff]">
          <Play />
          <Mail />
          <Send />
          <Phone />
          <X />
        </div>
      </div>
    </div>
  );
};

export default FocusDash;
