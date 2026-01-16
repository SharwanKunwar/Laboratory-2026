"use client";

import { AnimatedTooltip } from "./AnimatedTooltip";


const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex items-center justify-start pr-7">
      <AnimatedTooltip items={people} />
    </div>
  );
}