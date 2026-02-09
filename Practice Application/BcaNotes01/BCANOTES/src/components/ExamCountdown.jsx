import React, { useEffect, useState } from "react";

function ExamCountdown({ examDate }) {
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
        🎉 Exam Time!
      </div>
    );
  }

  return (
    <div className="flex justify-between text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-xs uppercase text-gray-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default ExamCountdown;
