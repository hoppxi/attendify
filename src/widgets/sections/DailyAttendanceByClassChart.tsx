import React from 'react';
import { Chart } from 'react-google-charts';
import style from "./charts.module.css";

const DailyAttendanceByClassChart = () => {
    const data = [
        ['Grade', 'Present', 'Absent', 'Late'],
        ['Grade 9', 30, 5, 2],
        ['Grade 10', 28, 7, 3],
        ['Grade 11', 35, 3, 4],
        ['Grade 12', 32, 6, 1],
    ];

    const getCSSVariable = (variable: any) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    };
    
    const options = {
        title: 'Daily Attendance by Grade',
        backgroundColor: "transparent",
        legendTextStyle: { color: getCSSVariable('--text-200') },
        titleTextStyle: { color: getCSSVariable('--text-100') },
        series: {
            0: { color: getCSSVariable('--link-100'), lineWidth: 4 },
            1: { color: getCSSVariable('--danger-100'), lineWidth: 4 },
        },
        chartArea: {
            backgroundColor: "transparent",
            width: "50%",
        },
        hAxis: {
            title: 'Number of Students',
            minValue: 0,
            textStyle: { color: getCSSVariable('--text-100') },
            titleTextStyle: { color: getCSSVariable('--text-100') },
            gridlines: { color: getCSSVariable('--secondary-000') },
            minorGridlines: { color: getCSSVariable('--secondary-000') },
        },
        vAxis: {
            title: 'Grade',
            textStyle: { color: getCSSVariable('--text-100') },
            titleTextStyle: { color: getCSSVariable('--text-100') },
            gridlines: { color: getCSSVariable('--secondary-500') },
            minorGridlines: { color: getCSSVariable('--secondary-300') },
        },
    };

    return (
        <div className={style.chart_container}>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
};

export default DailyAttendanceByClassChart;
