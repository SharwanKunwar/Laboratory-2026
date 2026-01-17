import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Pie01 = () => {
  const [state] = useState({
    series: [25, 15, 44, 55, 41, 17],
    options: {
      chart: {
        type: "pie",
        width: "100%",
        height: "100%",
      },
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5,
          },
        },
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return `${name}: ${val.toFixed(1)}%`;
        },
      },
      legend: {
        show: true,
      },
    },
  });

  return (
    
    <div className="w-[700px]">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
      />
    </div>
  );
};

export default Pie01;
