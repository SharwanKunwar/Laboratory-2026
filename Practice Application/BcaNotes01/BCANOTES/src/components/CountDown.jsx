import React, { useEffect, useState } from "react";

function CountDown({ examDate }) {
  const parseDate = (dateString) => {
    // Split the string into year, month, day
    const [year, month, day] = dateString.split("-").map(Number);
    // JS Date month is 0-based, so subtract 1
    return new Date(year, month - 1, day, 0, 0, 0);
  };

  const calculateTimeLeft = () => {
    const difference = parseDate(examDate) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [examDate]);

  if (!timeLeft) {
    return (
      <div className="text-center text-green-600 font-semibold">
        <pre>
          🎉 I Think you did it.
        </pre>
      </div>
    );
  }

  return (
    <div className="flex justify-between text-center gap-5">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col">
          <span className="text-5xl  font-bold bg-white/30 backdrop-blur-sm text-white w-[80px] h-[80px] rounded-sm shadow-sm text-shadow-sm mb-2 flex justify-center items-center">{value}</span>
          <span className="text-xs uppercase text-gray-200 text-shadow-sm">{label}</span>
        </div>
      ))}
      
    </div>
  );
}

export default CountDown;
