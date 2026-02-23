import { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import { motion } from "framer-motion";

export default function ChallengePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [days, setDays] = useState("");
  const [challenge, setChallenge] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("focusChallenge");
    if (saved) {
      setChallenge(JSON.parse(saved));
    }
  }, []);

  // Countdown logic
  useEffect(() => {
    if (!challenge) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance =
        new Date(challenge.endDate).getTime() - now;

      if (distance <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [challenge]);

  const startChallenge = () => {
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + parseInt(days));

    const newChallenge = {
      title,
      totalDays: parseInt(days),
      startDate: start,
      endDate: end,
    };

    localStorage.setItem(
      "focusChallenge",
      JSON.stringify(newChallenge)
    );

    setChallenge(newChallenge);
    setIsOpen(false);
  };

  const percent = challenge
    ? (
        ((new Date().getTime() -
          new Date(challenge.startDate).getTime()) /
          (new Date(challenge.endDate).getTime() -
            new Date(challenge.startDate).getTime())) *
        100
      ).toFixed(0)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-full bg-gray-600 text-white p-10 rounded-r-lg overflow-hidden hide-scrollbar"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-between items-center border-b border-white/10 pb-6"
      >
        <h1 className="text-3xl font-semibold tracking-tight">
          {challenge ? challenge.title : "No Active Challenge"}
        </h1>

        <Button
          size="large"
          onClick={() => setIsOpen(true)}
          className="!bg-white !text-black hover:!bg-gray-200 !border-none font-medium"
        >
          Create New Challenge
        </Button>
      </motion.div>

      {challenge && timeLeft && (
        <div className="grid grid-cols-12 gap-8 mt-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-8 bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm "
          >
            {/* Progress Circle */}
            <div className="flex justify-center items-center relative ">
              <svg width="250" height="250">
                <circle
                  cx="125"
                  cy="125"
                  r="100"
                  stroke="#262626"
                  strokeWidth="12"
                  fill="transparent"
                />

                <motion.circle
                  cx="125"
                  cy="125"
                  r="100"
                  stroke="#ffffff"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={628}
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 628 }}
                  animate={{
                    strokeDashoffset:
                      628 - (percent / 100) * 628,
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </svg>

              <motion.div
                key={percent}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute text-center"
              >
                <h2 className="text-4xl font-bold">
                  {percent}%
                </h2>
                <p className="text-gray-400 text-sm">
                  Complete
                </p>
              </motion.div>
            </div>

            {/* Countdown */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="flex justify-center gap-6 mt-10"
            >
              {[timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map(
                (val, i) => {
                  const labels = ["Days", "Hours", "Mins", "Secs"];
                  return (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="bg-white/5 border border-white/10 px-8 py-6 rounded-xl text-center"
                    >
                      <h3 className="text-3xl font-semibold">
                        {val}
                      </h3>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        {labels[i]}
                      </p>
                    </motion.div>
                  );
                }
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-4 flex flex-col gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <p className="text-gray-400 text-xs uppercase tracking-wider">
                Active Streak
              </p>
              <h2 className="text-6xl font-semibold mt-4">
                {Math.floor(percent / 5)}
              </h2>
              <p className="text-gray-500 text-sm">
                Days Active
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-6">
                Today's Goals
              </p>

              {[
                "Complete 4 Pomodoros",
                "Review Notes",
                "Deep Work (2h)",
              ].map((goal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <input type="checkbox" className="accent-white" />
                  <span className="text-sm">{goal}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Modal */}
      <Modal
        title="Create Challenge"
        open={isOpen}
        onOk={startChallenge}
        onCancel={() => setIsOpen(false)}
      >
        <Input
          placeholder="Challenge Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4"
        />
        <Input
          placeholder="Duration in days (30, 60...)"
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </Modal>
    </motion.div>
  );
}