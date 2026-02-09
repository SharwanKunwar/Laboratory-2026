"use client";
import React from "react";
import SparklesCore from "./Sparkles";
import { Button } from "antd";

export function SparklesPreview() {
  return (
    <div
      className="h-full w-full bg-indigo-400 flex flex-col items-center justify-center overflow-hidden rounded-md">
      
      <div className="w-full h-full relative">
        {/* //--------------------------------- */}
        <div
            className="absolute w-full h-full"
            style={{ boxShadow: "inset 2px 5px 9px rgba(0,0,0,0.3)" }}
            >
            <div className="h-full px-5 bg-transparent">
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
                    <div className=' text-white  w-[50%] h-full rounded-md shadow p-1'>
                        {/* <SparklesPreview/> */}
                    </div>
        </div>
        </div>
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
