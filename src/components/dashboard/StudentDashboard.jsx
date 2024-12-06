import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const StudentDashboard = () => {
    const dashboardData = {
        upcomingEvents: [
            {
                id: 1,
                title: 'Career Workshop',
                date: '2024-02-15',
                time: '14:00'
            },
            {
                id: 2,
                title: 'Mock Interview',
                date: '2024-02-18',
                time: '10:00'
            }
        ],
        courseProgress: [
            {
                id: 1,
                course: 'Web Development',
                progress: 75,
                nextLesson: 'React Components'
            },
            {
                id: 2,
                course: 'Digital Marketing',
                progress: 40,
                nextLesson: 'SEO Fundamentals'
            }
        ],
        recentAchievements: [
            {
                id: 1,
                title: 'Course Completion',
                description: 'Completed Python Basics'
            },
            {
                id: 2,
                title: 'Perfect Attendance',
                description: '30 Days Streak'
            }
        ]
    }

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 pt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Upcoming Events */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                >
                    <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                    <div className="space-y-4">
                        {dashboardData.upcomingEvents.map(event => (
                            <div key={event.id} className="border-l-4 border-indigo-500 pl-4">
                                <h3 className="font-semibold">{event.title}</h3>
                                <p className="text-gray-600">
                                    {new Date(event.date).toLocaleDateString()} at {event.time}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Link to="/events" className="text-indigo-600 block mt-4 hover:underline">
                        View All Events
                    </Link>
                </motion.div>

                {/* Course Progress */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                >
                    <h2 className="text-2xl font-bold mb-4">Course Progress</h2>
                    <div className="space-y-6">
                        {dashboardData.courseProgress.map(course => (
                            <div key={course.id}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">{course.course}</span>
                                    <span>{course.progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-full bg-indigo-600 rounded-full"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Next: {course.nextLesson}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Recent Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                >
                    <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
                    <div className="space-y-4">
                        {dashboardData.recentAchievements.map(achievement => (
                            <div key={achievement.id} className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold">{achievement.title}</h3>
                                <p className="text-gray-600">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                    <Link to="/achievements" className="text-indigo-600 block mt-4 hover:underline">
                        View All Achievements
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default StudentDashboard
