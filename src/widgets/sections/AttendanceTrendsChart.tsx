import React from 'react';
import { Chart } from 'react-google-charts';
import style from "./charts.module.css";

const AttendanceTrendsChart: React.FC<{data?: Array<Array<string | number>>}> = ({data}) => {
    const deafultData = [
        ['Date', 'Total Attendance', 'Absences', 'Lateness'],
        ['2024-08-01', 100, 10, 5],
        ['2024-08-02', 105, 8, 6],
        ['2024-08-03', 98, 12, 7],
        ['2024-08-04', 110, 7, 4],
    ];

    const getCSSVariable = (variable: any) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    };

    const options = {
        title: 'Attendance Trends Over Time',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: "transparent",
        legendTextStyle: { color: getCSSVariable('--text-200') },
        titleTextStyle: { color: getCSSVariable('--text-100') },
        series: {
            0: { color: getCSSVariable('--link-100'), lineWidth: 4 },
            1: { color: getCSSVariable('--danger-100'), lineWidth: 4 },
            2: { color: getCSSVariable('--warning-100'), lineWidth: 4 },
        },
        chartArea: {
            backgroundColor: "transparent",
        },
        hAxis: { 
            title: 'Date',
            textStyle: { color: getCSSVariable('--text-100') },
            titleTextStyle: { color: getCSSVariable('--text-100') },
            gridlines: { color: getCSSVariable('--secondary-000') },
            minorGridlines: { color: getCSSVariable('--secondary-000') },
        },
        vAxis: { 
            title: 'Number of Students',
            textStyle: { color: getCSSVariable('--text-100') },
            titleTextStyle: { color: getCSSVariable('--text-100') },
            gridlines: { color: getCSSVariable('--secondary-500') },
            minorGridlines: { color: getCSSVariable('--secondary-300') },
        },
    };

    return (
        <div className={style.chart_container}>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data ? data : deafultData}
                options={options}
            />
        </div>
    );
};

export default AttendanceTrendsChart;
