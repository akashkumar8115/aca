import React from 'react'
import { motion } from 'framer-motion'

const roadmapData = [
    {
        level: 'Beginner',
        courses: [
            {
                id: 1,
                title: 'Introduction to Programming',
                duration: '4 weeks',
                status: 'completed'
            },
            {
                id: 2,
                title: 'Web Development Basics',
                duration: '6 weeks',
                status: 'in-progress'
            }
        ]
    },
    {
        level: 'Intermediate',
        courses: [
            {
                id: 3,
                title: 'Advanced JavaScript',
                duration: '8 weeks',
                status: 'locked'
            },
            {
                id: 4,
                title: 'React Framework',
                duration: '10 weeks',
                status: 'locked'
            }
        ]
    }
]

const CourseRoadmap = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12"
            >
                Your Learning Path
            </motion.h1>

            <div className="space-y-12">
                {roadmapData.map((section, index) => (
                    <div key={index}>
                        <h2 className="text-2xl font-bold mb-6">{section.level}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {section.courses.map((course) => (
                                <motion.div
                                    key={course.id}
                                    whileHover={{ scale: 1.02 }}
                                    className={`p-6 rounded-xl shadow-lg ${course.status === 'locked'
                                            ? 'bg-gray-100'
                                            : 'bg-white'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-semibold">{course.title}</h3>
                                        <span className={`px-3 py-1 rounded-full text-sm ${course.status === 'completed'
                                                ? 'bg-green-100 text-green-700'
                                                : course.status === 'in-progress'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {course.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                                    <button
                                        className={`w-full py-2 rounded-lg ${course.status === 'locked'
                                                ? 'bg-green-300 cursor-not-allowed'
                                                : 'bg-green-400 text-black hover:bg-green-600'
                                            }`}
                                        disabled={course.status === 'locked'}
                                    >
                                        {course.status === 'completed'
                                            ? 'Review Course'
                                            : course.status === 'in-progress'
                                                ? 'Continue Learning'
                                                : 'Start Course'}
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseRoadmap
