"use client";

import { useState, useRef } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);

  const springConfig = { stiffness: 100, damping: 15 };

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.currentTarget.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative -mr-4"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <img
            onMouseMove={handleMouseMove}
            src={item.image}
            alt={item.name}
            className="relative h-9 w-9 rounded-full border-2 border-white object-cover transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};