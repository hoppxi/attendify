import React from 'react';
import { Chart } from 'react-google-charts';
import style from "./charts.module.css";

const AttendanceStatusChart: React.FC<{data?: Array<Array<string | number>>}> = ({data}) => {
    const defaultData = [
        ['Attendance Status', 'Number of Students'],
        ['Present', 80],
        ['Absent', 15],
        ['Late', 5],
    ];

    const getCSSVariable = (variable: any) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    };

    const options = {
        title: 'Attendance Status Breakdown',
        pieSliceText: 'label',
        legend: { position: 'bottom' },
        backgroundColor: "transparent",
        legendTextStyle: { color: getCSSVariable('--text-200') },
        titleTextStyle: { color: getCSSVariable('--text-100') },
    };

    return (
        <div className={style.chart_container}>
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data ? data : defaultData}
                options={options}
            />
        </div>
    );
};

export default AttendanceStatusChart;
