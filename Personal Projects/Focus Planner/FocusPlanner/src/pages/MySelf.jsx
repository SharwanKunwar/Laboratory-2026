import React from 'react';
import { useProfileStore } from '../data/useProfileStore';
import { motion } from "framer-motion";

function SkillTag({ skill }) {
  return (
    <span className='px-3 py-1 bg-slate-700 text-indigo-300 text-sm rounded-full border border-indigo-500/30'>
      {skill}
    </span>
  );
}

function MySelf() {
  const { profile, projects, skills, journey } = useProfileStore();

  return (
    <div className=' w-full h-full flex flex-col'>

      <div className='overflow-y-scroll overflow-x-hidden p-8 hide-scrollbar h-full'>

        {/* Section 1: Intro & Profile */}
        <motion.div
          className='w-full h-[350px] flex gap-5'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <div className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-[30%] h-full rounded-xl p-1 shadow-lg'>
            <div className=' w-full h-full rounded-lg overflow-hidden'>
              <img 
                src={profile.profileImg} 
                alt={profile.name}  
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
              />
            </div>
          </div>

          {/* Bio */}
          <div className='bg-slate-600 w-[70%] h-full rounded-xl p-8 flex flex-col justify-center border border-slate-700'>
            <h1 className='text-4xl font-bold text-white mb-2'>
              Hello, I'm <span className='text-indigo-400'>{profile.name}</span>
            </h1>
            <h2 className='text-xl text-slate-400 font-medium mb-4'>{profile.title}</h2>
            <p className='text-slate-300 leading-relaxed'>
              I build digital experiences that are functional, beautiful, and user-centered.
              With React and modern CSS, I turn complex problems into simple, elegant solutions.
            </p>
            <button className='mt-6 w-max px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors'>
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* Section 2: Projects & Skills */}
        <motion.div
          className='w-full h-[400px] flex gap-5 mt-5'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Projects */}
          <div className='bg-slate-600 w-[70%] h-full rounded-xl p-8 border border-slate-700 overflow-y-auto hide-scrollbar'>
        {/* Section 3: Journey */}
        <motion.div
          className='bg-slate-600 border border-indigo-500/20 w-full h-[400px] flex flex-col gap-5 mt-5 rounded-xl p-8'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className='text-2xl font-bold text-white'>My Journey</h3>
          <div className='grid grid-cols-2 gap-8 text-slate-300'>
            <div>
              <h4 className='font-bold text-indigo-400'>Education</h4>
              <p className='text-sm mt-2 whitespace-pre-line'>{journey.education}</p>
            </div>
            <div>
              <h4 className='font-bold text-indigo-400'>Experience</h4>
              <p className='text-sm mt-2 whitespace-pre-line'>{journey.experience}</p>
            </div>
          </div>
          <p className='mt-4 text-slate-400 italic'>" {journey.quote} "</p>
        </motion.div>
        </div>

          {/* Skills & Contact */}
          <div className='bg-slate-600 w-[30%] h-full rounded-xl p-6 border border-slate-700 sticky top-5'>
            <h3 className='text-xl font-bold text-white mb-4'>Core Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {skills.map((skill) => <SkillTag key={skill} skill={skill} />)}
            </div>
            <div className='mt-8 pt-6 border-t border-slate-700'>
              <h4 className='text-white font-semibold mb-2'>Let's Connect</h4>
              <p className='text-slate-400 text-sm'>Email: {profile.email}</p>
              <p className='text-slate-400 text-sm'>GitHub: {profile.github}</p>
            </div>
          </div>
        </motion.div>

        {/* // iframe */}
        <div className='mt-10 h-[630px] rounded-sm overflow-hidden border border-slate-700'>
        <iframe
            src="https://stranger-cyan.vercel.app/" // replace with your project URL
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "4px", overflow: "hidden" }}
            title="Project Preview"
        />
        </div>

        

      </div>
    </div>
  );
}

export default MySelf;