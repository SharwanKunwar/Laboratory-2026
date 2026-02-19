import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";

function TimeTracker({ onTimeUpdate }) {
  const [time, setTime] = useState(0); // timer in ms
  const [isRunning, setIsRunning] = useState(false);

  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          const newTime = prev + 10;
          if (onTimeUpdate) onTimeUpdate(newTime); // <-- send value to TaskCard
          return newTime;
        });
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, onTimeUpdate]);

  // Format HH:MM:SS:MS
  const formatTime = (ms) => {
    if (typeof ms !== "number" || isNaN(ms)) return "00:00:00:00";
    const hrs = String(Math.floor(ms / 3600000)).padStart(2, "0");
    const mins = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
    const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const millis = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${hrs}:${mins}:${secs}:${millis}`;
  };

  return (
    <div className="mt-0 px-3 flex flex-col gap-3 items-center">
      {/* Timer Display */}
      <div className="flex justify-center items-center mastShadow !bg-gradient-to-br from-indigo-400 to-pink-400 w-full h-[29vh] border-black/30 border rounded-lg">
        <div className="text-6xl text-white flex justify-center items-center">
          {formatTime(time)}
        </div>
      </div>

      {/* Start / Stop & Reset */}
      <section className="bg-white rounded-lg w-full flex justify-between items-center gap-5">
        <Button
          className="!px-14 !py-5 mastShadow !bg-gradient-to-br from-pink-400 to-orange-400 via-indigo-400 !text-white !font-medium !text-[16px] w-full!"
          onClick={() => setIsRunning((prev) => !prev)}
        >
          {isRunning ? "Stop Timer" : "Start Timer"}
        </Button>

        <Button
          className="!px-14 !py-5 mastShadow !bg-gradient-to-br from-indigo-400 to-pink-400 via-orange-400 !text-white !font-medium !text-[16px] w-full"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
            if (onTimeUpdate) onTimeUpdate(0); // reset in parent too
          }}
        >
          Reset Timer
        </Button>
      </section>

      {/* Music & AI Buttons */}
      <section className="w-full rounded-lg flex justify-between items-center gap-5">
        <Button
          size="large"
          className="w-full mastShadow !bg-gradient-to-br from-indigo-400 to-pink-400 via-orange-400 !text-white !font-medium !text-[16px]"
          onClick={() => setIsMusicOpen(true)}
        >
          Play Music
        </Button>

        <Button
          size="large"
          className="w-full mastShadow !bg-gradient-to-br from-indigo-400 to-pink-400 via-orange-400 !text-white !font-medium !text-[16px]"
          onClick={() => setIsAiOpen(true)}
        >
          Open Draw
        </Button>
      </section>

      {/* Music Modal */}
      <Modal
        open={isMusicOpen}
        footer={null}
        onCancel={() => setIsMusicOpen(false)}
        width="97vw"
        style={{ top: '5vh', left: '0vw' }}
        bodyStyle={{ height: "78vh", padding: "20px" }}
        centered
      >
        <h1>Music</h1>
      </Modal>

      {/* AI Modal */}
      <Modal
        open={isAiOpen}
        footer={null}
        onCancel={() => setIsAiOpen(false)}
        width="97vw"
        style={{ top: '5vh', left: '0vw' }}
        bodyStyle={{ height: "78vh", padding: "20px" }}
        centered
      >
        <iframe src="https://excalidraw.com/" className="w-full h-full"></iframe>
      </Modal>
    </div>
  );
}

export default TimeTracker;
