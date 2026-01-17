import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {Button} from 'antd'

const Pie03 = () => {
        const [state, setState] = useState({
          
            series: [44, 55, 13, 33],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              dataLabels: {
                enabled: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: false
                  }
                }
              }],
              legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
              }
            },
          
          
        });

        
          function appendData() {
          var arr = state.series.slice()
          arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
        
          setState({
            ...state,
            series: arr
          })
        }
        
        function removeData() {
          if(state.series.length === 1) return
          
          var arr = state.series.slice()
          arr.pop()
        
          setState({
            ...state,
            series: arr
          })
        }
        
        function randomize() {
          setState({
            ...state,
            series: state.series.map(function() {
              return Math.floor(Math.random() * (100 - 1 + 1)) + 1
            })
          })
        }
        
        function reset() {
          setState({
            ...state,
            series: [44, 55, 13, 33]
          })
        }
        

        return (
          <div>
            <div className="">
                <div class="chart-wrap">
                  <div className="w-[600px]">
                <ReactApexChart options={state.options} series={state.series} type="donut"/>
              </div>
                </div>
              
                <div class="actions" className=" py-5 flex gap-3">
                  
                  <Button size="large" onClick={() => appendData()}> + ADD </Button>
                  <Button size="large" onClick={() => removeData()} > - REMOVE </Button>
                  <Button size="large" > RANDOMIZE </Button>
                  <Button size="large" onClick={() => reset()} > RESET </Button>

                </div>
              </div>
            
          </div>
        );
      }

      export default Pie03;