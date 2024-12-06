import React from 'react'
import { motion } from 'framer-motion'
import { Line, Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const ProgressAnalytics = () => {
    const learningData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Hours Spent Learning',
                data: [10, 15, 12, 18],
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.5)',
            }
        ]
    }

    const skillsData = {
        labels: ['Technical', 'Soft Skills', 'Leadership', 'Problem Solving'],
        datasets: [
            {
                label: 'Skill Progress',
                data: [80, 65, 45, 70],
                backgroundColor: 'rgba(99, 102, 241, 0.5)',
                borderColor: 'rgb(99, 102, 241)',
                borderWidth: 1,
            }
        ]
    }

    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-8"
            >
                Learning Analytics
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                >
                    <h2 className="text-xl font-semibold mb-4">Learning Time</h2>
                    <Line data={learningData} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                >
                    <h2 className="text-xl font-semibold mb-4">Skills Assessment</h2>
                    <Bar data={skillsData} />
                </motion.div>
            </div>
        </div>
    )
}

export default ProgressAnalytics
