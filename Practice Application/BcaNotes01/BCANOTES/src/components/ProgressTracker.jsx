import React, { useState, useMemo } from "react"

const COLORS = [
  "bg-[#ebedf0]",
  "bg-[#9be9a8]",
  "bg-[#40c463]",
  "bg-[#30a14e]",
  "bg-[#216e39]"
]

// Generate random data for the year
const generateYearData = (year) => {
  const start = new Date(year, 0, 1)
  const end = new Date(year, 11, 31)
  const data = []

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    data.push({
      date: new Date(d),
      count: Math.floor(Math.random() * 5)
    })
  }

  return data
}

// Format date nicely for tooltip
const formatDate = (date) =>
  `${date.toLocaleString("default", { month: "short" })} ${date.getDate()}, ${date.getFullYear()}`

function ProgressTracker() {
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(currentYear)

  const data = useMemo(() => generateYearData(year), [year])

  // Convert data into weeks
  const weeks = []
  let week = Array(7).fill(null)
  let lastMonth = null
  const monthPositions = {} // store month first column index

  data.forEach((item, index) => {
    const day = item.date.getDay()
    week[day] = { count: item.count, date: item.date }

    if (!monthPositions[item.date.getMonth()]) {
      // store column index for first day of the month
      monthPositions[item.date.getMonth()] = weeks.length
    }

    if (day === 6 || index === data.length - 1) {
      weeks.push({
        days: week,
        isNewMonth: week.some(d => d && d.date.getDate() === 1)
      })
      week = Array(7).fill(null)
    }
  })

  return (
    <div className="h-full flex flex-col text-[11px]">

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-800 text-lg">
          {year} Contributions
        </span>

        <select
          className="border rounded px-1 py-[1px] text-sm"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {Array.from({ length: 6 }, (_, i) => currentYear - i).map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* Month Labels */}
      <div className="relative h-5 mb-2">
        {Object.entries(monthPositions).map(([month, colIndex]) => (
          <span
            key={month}
            className="absolute text-[15px] text-gray-500 "
            style={{ left: `${colIndex * 24}px` }} // 12px square + 3px gap
          >
            {new Date(year, month).toLocaleString("default", { month: "short" })}
          </span>
        ))}
      </div>

      {/* Heatmap */}
<div className="flex-1 overflow-x-auto overflow-y-hidden">
  <div className="flex w-max ">
    {weeks.map((week, wIdx) => (
      <div
        key={wIdx}
        className={`flex flex-col gap-[3px] ${
          week.isNewMonth ? "ml-7" : "ml-[5px]"
        }`} // bigger margin for new month
      >
        {week.days.map((day, dIdx) =>
          day ? (
            <div
              key={dIdx}
              className={`w-[12px] h-[12px] rounded ${COLORS[day.count]} relative group`}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-[9px] px-1 py-[1px] whitespace-nowrap z-50 shadow-sm">
                {day.count} tasks on {formatDate(day.date)}
              </div>
            </div>
          ) : (
            <div key={dIdx} className="w-[12px] h-[12px] bg-transparent" />
          )
        )}
      </div>
    ))}
  </div>
</div>

      {/* Legend */}
      <div className="flex justify-end items-center gap-1 mt-2 text-[10px] text-gray-600">
        <span>Less</span>
        {COLORS.map((c, i) => (
          <div key={i} className={`w-[10px] h-[10px] rounded-full ${c}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}

export default ProgressTracker
