import React from 'react'
import { motion } from 'framer-motion'

const achievements = [
    {
        id: 1,
        title: 'Career Explorer',
        description: 'Completed 5 career assessments',
        icon: '🎯',
        progress: 80,
    },
    {
        id: 2,
        title: 'Networking Pro',
        description: 'Connected with 10 industry professionals',
        icon: '🤝',
        progress: 60,
    },
    {
        id: 3,
        title: 'Skill Master',
        description: 'Completed 3 skill development courses',
        icon: '⭐',
        progress: 40,
    }
]

const Achievements = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                    <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-xl shadow-lg p-6"
                    >
                        <div className="text-4xl mb-4">{achievement.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-gray-600 mb-4">{achievement.description}</p>
                        <div className="relative h-2 bg-gray-200 rounded-full">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${achievement.progress}%` }}
                                className="absolute h-full bg-indigo-600 rounded-full"
                            />
                        </div>
                        <div className="mt-2 text-right text-sm text-gray-600">
                            {achievement.progress}%
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Achievements
