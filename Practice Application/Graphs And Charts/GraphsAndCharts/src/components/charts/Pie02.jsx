import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Pie02 = () => {
        const [state] = useState({
          
            series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
        });

        

        return (
          <div>
            <div className="w-[700px]">
                <ReactApexChart options={state.options} series={state.series} type="donut" />
              </div>
          </div>
        );
      }
    export default Pie02;