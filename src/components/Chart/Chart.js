import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    // 12개의 value 값을 array로 만듦
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}
                />))}
        </div>
    );
};

export default Chart;