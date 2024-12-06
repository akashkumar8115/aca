import React from 'react'
import { motion } from 'framer-motion'

const ProgressTracker = () => {
    const progressData = [
        {
            course: "Career Counselling",
            progress: 75,
            nextMilestone: "Career Path Selection"
        },
        {
            course: "Technical Skills",
            progress: 60,
            nextMilestone: "Project Completion"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Learning Journey</h1>

                <div className="grid gap-6">
                    {progressData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-lg shadow-xl p-6"
                        >
                            <h3 className="text-xl font-semibold mb-4">{item.course}</h3>
                            <div className="relative h-4 bg-gray-200 rounded-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.progress}%` }}
                                    transition={{ duration: 1 }}
                                    className="absolute h-full bg-indigo-600 rounded-full"
                                />
                            </div>
                            <div className="mt-4 text-gray-600">
                                Next Milestone: {item.nextMilestone}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProgressTracker