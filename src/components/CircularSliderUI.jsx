import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function CircularSliderUI() {

    // const data = {
    //     labels: [
    //         'Red',
    //         'Blue',
    //         'Yellow'
    //     ],
    //     datasets: [{
    //         label: 'My First Dataset',
    //         data: [300, 50, 100],
    //         backgroundColor: [
    //             'rgb(255, 99, 132)',
    //             'rgb(54, 162, 235)',
    //             'rgb(255, 205, 86)'
    //         ],
    //         hoverOffset: 4,
    //     }]
    // };

    const [chartData, setChartData] = useState({
        labels: ['Dalal Earnings', 'Trader Earnings', 'Misc. Fees', 'Referral Earnings'],
        datasets: [
            {
                data: [1225, 810, 225, 250],
                backgroundColor: ['blue', 'gray', 'red', 'yellow'],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                hoverOffset: 4,
                cutout: 150,
            }
        ],
    });

    const showChart = () => {
        setChartData({
            datasets: [
                {
                    data: [200, 300, 400, 500],
                    backgroundColor: [
                        'blue',
                        'gray',
                        'red',
                        'yellow'
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                    ],
                    hoverOffset: 4
                }
            ],
            labels: ['Dalal Earnings', 'Trader Earnings', 'Misc. Fees', 'Referral Earnings']
        })
    }

    // useEffect(() => {
    //     setChartData({
    //         labels: ['Dalal Earnings', 'Trader Earnings', 'Misc. Fees', 'Referral Earnings'],
    //         datasets: [
    //             {
    //                 data: [1225, 810, 225, 250],
    //                 backgroundColor: ['bg-blue-500', 'bg-gray-500', 'bg-red-500', 'bg-yellow-500'],
    //                 hoverOffset: 4
    //             }
    //         ]
    //     })
    // }, []);

    return (
        <div className='h-full'>
            <h1 className="text-2xl text-gray-700">Gross Earnings</h1>
            <button onClick={showChart} className="border ">BUTTON</button>
            <div className="p-4 flex items-center justify-center h-[80%]">
                <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    )
}

export default CircularSliderUI
