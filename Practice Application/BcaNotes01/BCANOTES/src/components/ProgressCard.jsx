import { Progress } from 'antd'
import React from 'react'

function ProgressCard() {
  return (
    <div className="bg-white w-full h-17.5 rounded-md flex gap-1">

      {/* left div */}
      <div className="w-[50%] h-full flex justify-start items-center px-5 gap-3">
        <img
          src="vite.svg"
          alt="img"
          className="bg-slate-300 p-2 rounded-md w-10 h-10"
        />

        <section className="leading-5">
          <h1 className="text-lg font-medium">
            Data Structure and Algorithms
          </h1>
          <p className="text-neutral-400 text-sm">
            24/40 Lesson completed
          </p>
        </section>
      </div>

      {/* right div */}
      <div className="w-[50%] h-full flex items-center px-5 justify-center">
        <Progress
        percent={66}
        strokeWidth={10}
        className="w-full"
        format={(percent) => `${percent}% completed`}
        />

      </div>

    </div>
  )
}

export default ProgressCard
