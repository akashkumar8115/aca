import React from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';

const CourseStatistics = ({ category }) => {
    const data = {
        labels: ['Placement Rate', 'Average Package', 'Higher Studies', 'Entrepreneurship'],
        datasets: [{
            label: `${category} Statistics`,
            data: [85, 75, 25, 15],
            backgroundColor: [
                'rgba(147, 51, 234, 0.5)',
                'rgba(79, 70, 229, 0.5)',
                'rgba(59, 130, 246, 0.5)',
                'rgba(16, 185, 129, 0.5)'
            ],
            borderColor: [
                'rgb(147, 51, 234)',
                'rgb(79, 70, 229)',
                'rgb(59, 130, 246)',
                'rgb(16, 185, 129)'
            ],
            borderWidth: 1
        }]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg mt-8"
        >
            <h3 className="text-xl font-semibold mb-6">Course Statistics</h3>
            <div className="h-64">
                <Bar data={data} options={{ maintainAspectRatio: false }} />
            </div>
        </motion.div>
    );
};

export default CourseStatistics;
