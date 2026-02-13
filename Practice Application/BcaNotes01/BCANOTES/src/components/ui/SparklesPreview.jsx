"use client";
import React from "react";
import SparklesCore from "./Sparkles";
import { Button } from "antd";
import ExamCountdown from "../ExamCountdown";
import CountDown from "../CountDown";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


export function SparklesPreview() {
  return (
    <div
      className="h-full w-full bg-indigo-400 flex flex-col items-center justify-center overflow-hidden rounded-md">
      
      <div className="w-full h-full relative">
        {/* //------------------------------------------------------------------ */}
        <div
            className="absolute w-full h-full"
            style={{ boxShadow: "inset 2px 5px 9px rgba(0,0,0,0.3)" }}
            >
            <div className="h-full px-5">
            {/* left div  */}
                    <div className=' w-[50%] h-full flex flex-col justify-center gap-1'>
                        <h1 className='text-white font-bold text-3xl text-shadow-sm'>Welcome back, Sharwan jung kunwar</h1>
                        <p className='w-[60%] text-neutral-200 text-shadow-sm'>You've completed 65% of your semester goals. You're ahead of 82% of your class!</p>
                        <section className='mt-5 flex gap-3'>
                            <Button size='large' className='px-10!'>Resume Last Study</Button>
                            <Button size='large' className='px-10!'>View Analytics</Button>
                        </section>
                    </div>

                    

                    {/* right div  */}
                    <div className='absolute  text-white w-[50%] h-full top-0 right-0 z-40 flex flex-col items-end justify-end '>
                      {/* // social media */}
                        <div className="w-full h-full flex justify-end items-start pt-3  pr-3 gap-3 ">
                          <a
                            href="#"
                            className="text-black hover:text-blue-600 transition p-1 rounded bg-gray-50"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaFacebookF size={20} />
                          </a>

                          <a
                            href="#"
                            className="text-black hover:text-pink-600 transition p-1 rounded bg-gray-50"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaInstagram size={20} />
                          </a>

                          <a
                            href="#"
                            className="text-black hover:text-gray-800 transition p-1 rounded bg-gray-50"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size={20} />
                          </a>

                          <a
                            href="#"
                            className="text-black hover:text-blue-700 transition bg-gray-50 p-1 rounded"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaLinkedin size={20} />
                          </a>
                        </div>

                        <div className=" w-[90%] h-[65%] rounded-md  flex items-end flex-col pb-3 pr-3">
                        {/* <h1 className="ml-10 font-medium w-full mb-5 text-xl">Your Challange Days</h1> */}
                          <CountDown examDate="2026-2-15" />
                        </div>

                        
                    </div>
        </div>
        
        </div>
        {/* //------------------------------------------------------------------ */}
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />
          

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-indigo-400 [mask-image:radial-gradient(1250px_350px_at_left,transparent_30%,white)]"></div>
      </div>
    
    </div>
  );
}
