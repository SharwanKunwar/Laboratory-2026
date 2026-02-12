import React, { useEffect, useState } from "react";
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

const engines = {
  Google: "https://www.google.com/search?q=",
  DuckDuckGo: "https://duckduckgo.com/?q=",
  Bing: "https://www.bing.com/search?q=",
  Brave: "https://search.brave.com/search?q=",
  YouTube: "https://www.youtube.com/results?search_query="
};

const FocusDash = () => {
  const [time, setTime] = useState(new Date());
  const [query, setQuery] = useState("");
  const [engine, setEngine] = useState("Google");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  const getGreeting = () => {
    if (hours < 12) return "Good Morning.";
    if (hours < 18) return "Good Afternoon.";
    return "Good Evening.";
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    const url = engines[engine] + encodeURIComponent(query);
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#e6ebf2] flex flex-col px-10 py-8 text-gray-700 relative">

      {/* ---------- HEADER ---------- */}
      <div className="flex justify-between items-center">

        <div className="px-6 py-3 rounded-full bg-[#e6ebf2] shadow-[8px_8px_16px_#cfd6df,-8px_-8px_16px_#ffffff] flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <span className="font-semibold text-lg">FocusDash</span>
        </div>
      </div>

      <div className="flex justify-end items-center mt-5">
        {/* Weather */}
        <div className="px-6 py-2 rounded-2xl bg-[#e6ebf2] shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff] flex items-center gap-6">
          <Cloud className="text-blue-400" />
          <div>
            <p className="text-xs tracking-widest text-blue-400">KATHMANDU</p>
            <p className="text-xl font-light">15°C • Mist</p>
            <p className="text-xs text-gray-500">Humidity 67%</p>
          </div>
        </div>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="flex flex-1 items-top justify-evenly flex-wrap gap-10 mt-10 ">

        {/* Clock */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="w-80 h-80 rounded-full bg-[#e6ebf2] shadow-[20px_20px_40px_#cfd6df,-20px_-20px_40px_#ffffff] flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-[#e6ebf2] shadow-inner relative">

              {/* Hour */}
              <div
                className="absolute w-1 h-16 bg-blue-700 top-1/2 left-1/2 origin-bottom rounded-full"
                style={{ transform: `translate(-50%, -100%) rotate(${hourDeg}deg)` }}
              />

              {/* Minute */}
              <div
                className="absolute w-1 h-24 bg-blue-500 top-1/2 left-1/2 origin-bottom rounded-full"
                style={{ transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)` }}
              />

              {/* Second */}
              <div
                className="absolute w-0.5 h-28 bg-red-400 top-1/2 left-1/2 origin-bottom rounded-full"
                style={{ transform: `translate(-50%, -100%) rotate(${secondDeg}deg)` }}
              />

              <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[45%]">

          <h1 className="text-3xl text-gray-400 font-light">
            {getGreeting()}
          </h1>
          <h2 className="text-4xl font-semibold mt-2">
            What's on your mind?
          </h2>

          {/* Engines */}
          <div className="flex flex-wrap gap-3 mt-6">
            {Object.keys(engines).map((item) => (
              <button
                key={item}
                onClick={() => setEngine(item)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 shadow-[6px_6px_12px_#cfd6df,-6px_-6px_12px_#ffffff] ${
                  engine === item
                    ? "bg-blue-500 text-white scale-105"
                    : "bg-[#e6ebf2]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mt-8 flex items-center bg-[#e6ebf2] px-6 py-3 rounded-full shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search the web or type a URL..."
              className="flex-1 bg-transparent outline-none px-4"
            />
            <Mic size={18} className="text-gray-400 mr-4 cursor-pointer" />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-5 py-2 rounded-full hover:scale-105 transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <div className="flex justify-between items-center mt-10">

        <div className="px-6 py-3 rounded-full bg-[#e6ebf2] shadow-[8px_8px_16px_#cfd6df,-8px_-8px_16px_#ffffff] flex items-center gap-3 hover:scale-105 transition cursor-pointer">
          <Sparkles size={18} className="text-blue-500" />
          <span>AI Tools</span>
        </div>

        <div className="flex gap-6 px-8 py-3 rounded-full bg-[#e6ebf2] shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
          <Play className="cursor-pointer" />
          <Mail className="cursor-pointer" />
          <Send className="cursor-pointer" />
          <Phone className="cursor-pointer" />
          <X className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FocusDash;
