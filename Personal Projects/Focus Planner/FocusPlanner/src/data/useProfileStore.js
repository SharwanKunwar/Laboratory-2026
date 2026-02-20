import { create } from 'zustand';

export const useProfileStore = create((set) => ({
  // Profile Info
  profile: {
    name: "Sharwan Jung Kunwar",
    title: "Full Stack Developer & UI/UX Enthusiast",
    email: "hello@sharwan.com",
    github: "@sharwan",
    profileImg: "profile01.jpg"
  },

  // Projects
  projects: [
      { title: "Project Beta", desc: "R3F", preview: "projectImg/p01.png", link:"https://3d-scene-mu.vercel.app/" },
    { title: "Project Alpha", desc: "stranger wowow", preview: "projectImg/p01.png", link:"https://stranger-cyan.vercel.app/"},
  ],

  // Skills
  skills: ["React", "Next.js", "Tailwind", "Node.js", "TypeScript", "Figma"],

  // Education & Experience
  journey: {
    education: "B.S. in Computer Science\nUniversity of Tech, 2020-2024",
    experience: "Junior Developer @ TechCorp\nJan 2024 - Present",
    quote: "The only way to do great work is to love what you do."
  },

  // Actions to update store
  updateProfile: (newProfile) => set({ profile: { ...newProfile } }),
  updateProjects: (newProjects) => set({ projects: [...newProjects] }),
  updateSkills: (newSkills) => set({ skills: [...newSkills] }),
  updateJourney: (newJourney) => set({ journey: { ...newJourney } }),
}));