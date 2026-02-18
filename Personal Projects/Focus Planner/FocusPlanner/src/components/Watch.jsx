import React, { useEffect, useState, useRef } from "react";

const Watch = () => {
  const [time, setTime] = useState(new Date());
  const containerRef = useRef(null);
  const [size, setSize] = useState(200); // default size

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Resize observer for responsiveness
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setSize(Math.min(width, height) - 20); // padding
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) resizeObserver.unobserve(containerRef.current);
    };
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  const hourTicks = Array.from({ length: 12 }, (_, i) => i + 1);
  const minuteTicks = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div ref={containerRef} className="w-[20vw] h-[38vh] flex items-center justify-center mt-2 mastShadow">
      <div
        className="relative rounded-md bg-gradient-to-br from-pink-400 to-orange-400 via-slate-500/50 backdrop-blur-2xl  mastShadow"
        style={{ width: size, height: size }}
      >
        {/* Hour ticks */}
        {hourTicks.map((h) => (
          <div
            key={h}
            className="absolute bg-black mastShadow"
            style={{
              width: size * 0.02,
              height: size * 0.06,
              top: "48%",
              left: "48%",
              transform: `translate(-50%, -99%) rotate(${h * 30}deg)`,
              transformOrigin: "bottom center",
            }}
          />
        ))}

        {/* Minute ticks */}
        {minuteTicks.map((m) => (
          <div
            key={m}
            className="absolute bg-white mastShadow z-50"
            style={{
              width: size * 0.005,
              height: size * 0.03,
              top: "48%",
              left: "48%",
              transform: `translate(-50%, -99%) rotate(${m * 6}deg)`,
              transformOrigin: "bottom center",
            }}
          />
        ))}

        {/* Hour hand */}
        <div
          className="absolute bg-white rounded-md mastShadow z-10"
          style={{
            width: size * 0.03,
            height: size * 0.25,
            top: "48%",
            left: "48%",
            transform: `translate(-50%, -99%) rotate(${hourDeg}deg)`,
            transformOrigin: "bottom center",
          }}
        />

        {/* Minute hand */}
        <div
          className="absolute bg-white rounded-md z-20 mastShadow"
          style={{
            width: size * 0.02,
            height: size * 0.30,
            top: "48%",
            left: "48%",
            transform: `translate(-50%, -99%) rotate(${minuteDeg}deg)`,
            transformOrigin: "bottom center",
          }}
        />

        {/* Second hand */}
        <div
          className="absolute bg-white rounded z-30 mastShadow"
          style={{
            width: size * 0.01,
            height: size * 0.4,
            top: "48%",
            left: "48%",
            transform: `translate(-50%, -99%) rotate(${secondDeg}deg)`,
            transformOrigin: "bottom center",
        }}/>


        {/* Center circle */}
        <div
          className="absolute bg-white rounded-full z-40 mastShadow"
          style={{
            width: size * 0.05,
            height: size * 0.05,
            top: "48%",
            left: "48%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        />

        {/* Numbers 1-12 */}
        {hourTicks.map((h) => {
          const angle = ((h * 30 - 90) * Math.PI) / 180;
          const radius = size * 0.40;
          const x = size / 2.1 + radius * Math.cos(angle);
          const y = size / 2.1 + radius * Math.sin(angle);
          return (
            <span
              key={h}
              style={{
                position: "absolute",
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                color: "white",
                fontWeight: "bold",
                fontSize: size * 0.08,
              }}
            >
              {h}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Watch;