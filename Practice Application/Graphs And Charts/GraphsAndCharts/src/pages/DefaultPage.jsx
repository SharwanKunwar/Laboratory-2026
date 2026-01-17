import React from 'react'

function DefaultPage() {
  return (
    <>
        <div className=' w-[70%] h-[70%] flex flex-col items-center justify-center text-center gap-3'>
            <h1 className="text-3xl font-medium text-white">
                You can choose the graph
            </h1>

            <p className="text-neutral-300">
                Select the chart type that best represents your data. Visualize trends,
                compare values, and gain insights quickly using interactive and dynamic
                graphs tailored to your needs.
            </p>

        </div>
    </>
  )
}

export default DefaultPage