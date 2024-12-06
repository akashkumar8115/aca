import React from 'react'
import { motion } from 'framer-motion'
import { Bar, Pie, Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

const placementData = {
    overview: {
        placementRate: 95,
        averageSalary: "12 LPA",
        totalCompanies: 500,
        internshipConversion: 78
    },
    salaryDistribution: {
        labels: ['4-8 LPA', '8-12 LPA', '12-16 LPA', '16-20 LPA', '20+ LPA'],
        data: [30, 35, 20, 10, 5]
    },
    topEmployers: [
        { name: "Google", hires: 45 },
        { name: "Microsoft", hires: 38 },
        { name: "Amazon", hires: 42 },
        { name: "IBM", hires: 35 },
        { name: "TCS", hires: 50 }
    ],
    industryDistribution: {
        labels: ['IT', 'Finance', 'Consulting', 'Manufacturing', 'Others'],
        data: [40, 25, 15, 12, 8]
    }
}

const PlacementStats = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 py-16 pt-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-4">Placement Statistics</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive placement data showcasing our students' success in securing rewarding careers
                    </p>
                </motion.div>

                {/* Key Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {Object.entries(placementData.overview).map(([key, value], index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg p-6 text-center"
                        >
                            <h3 className="text-gray-600 mb-2 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <p className="text-3xl font-bold text-violet-600">{value}%</p>
                        </motion.div>
                    ))}
                </div>

                {/* Salary Distribution */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-xl shadow-lg p-6"
                    >
                        <h2 className="text-xl font-semibold mb-4">Salary Distribution</h2>
                        <Bar
                            data={{
                                labels: placementData.salaryDistribution.labels,
                                datasets: [{
                                    label: 'Percentage of Students',
                                    data: placementData.salaryDistribution.data,
                                    backgroundColor: 'rgba(129, 140, 248, 0.6)',
                                }]
                            }}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Salary Range Distribution'
                                    }
                                }
                            }}
                        />
                    </motion.div>

                    {/* Industry Distribution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-xl shadow-lg p-6"
                    >
                        <h2 className="text-xl font-semibold mb-4">Industry Distribution</h2>
                        <Pie
                            data={{
                                labels: placementData.industryDistribution.labels,
                                datasets: [{
                                    data: placementData.industryDistribution.data,
                                    backgroundColor: [
                                        'rgba(129, 140, 248, 0.6)',
                                        'rgba(147, 197, 253, 0.6)',
                                        'rgba(167, 139, 250, 0.6)',
                                        'rgba(196, 181, 253, 0.6)',
                                        'rgba(216, 180, 254, 0.6)',
                                    ],
                                }]
                            }}
                        />
                    </motion.div>
                </div>

                {/* Top Employers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                >
                    <h2 className="text-xl font-semibold mb-6">Top Recruiting Companies</h2>
                    <div className="grid md:grid-cols-5 gap-4">
                        {placementData.topEmployers.map((employer, index) => (
                            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">{employer.name}</h3>
                                <p className="text-violet-600 font-bold">{employer.hires} Hires</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PlacementStats