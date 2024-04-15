
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["red", "blue", "yellow", "green", "purple", "orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 30, 14, 5, 12, 25],
                    borderColor: [
                        'rgba(53, 150, 235, 0.4)',
                        'rgba(63, 130, 245, 0.4)',
                        'rgba(73, 160, 255, 0.4)',
                        'rgba(83, 190, 265, 0.4)',
                        'rgba(93, 210, 275, 0.4)',
                        'rgba(103, 255, 285, 0.4)'
                ],
                    backgroundColor: [
                        'rgba(53, 100, 235, 0.4)',
                        'rgba(63, 130, 245, 0.4)',
                        'rgba(73, 160, 255, 0.4)',
                        'rgba(83, 190, 265, 0.4)',
                        'rgba(93, 210, 275, 0.4)',
                        'rgba(103, 255, 285, 0.4)'
                ],
                    borderWidth: 1
                }
            ]
        })

        setChartOptions({
            plugins:{
                legend:{
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])
    return(
        <>
        <div>
            <Pie data={chartData} options={chartOptions}/>
        </div>
            
        </>
    )
}