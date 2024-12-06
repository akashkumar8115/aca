
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const CourseAnalytics = () => {
    const enrollmentData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Course Enrollments',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Course Analytics</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-6 rounded-lg shadow"
                    >
                        <h2 className="text-xl font-semibold mb-4">Enrollment Trends</h2>
                        <Line data={enrollmentData} />
                    </motion.div>

                    {/* Add more analytics components */}
                </div>
            </div>
        </div>
    );
};

export default CourseAnalytics;
