import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
  ArcElement, Tooltip, Legend
)

const ProgressChart = (props) => {
  const {dataItem} = props
  console.log(dataItem);
    const options = {
    }; 
    const data = {
      labels: ['Correct','Incorrect'],
      datasets: [{
        data: dataItem,
        backgroundColor: ['#4d7c0f','#ff0303'],
        borderColor: ['#f2ffe0', '#fff'],
      }]
    }
    return (
        <div>
          <Doughnut
            data = {data}
            options= {options}
          />
        </div>
    )
}

export default ProgressChart