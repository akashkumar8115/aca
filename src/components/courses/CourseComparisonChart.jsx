import React from 'react';
import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';

const CourseComparisonChart = ({ courses }) => {
    const data = {
        labels: ['Job Prospects', 'Salary Potential', 'Course Duration', 'Industry Demand', 'Research Opportunities', 'Skill Development'],
        datasets: courses.map((course, index) => ({
            label: course.name,
            data: course.metrics,
            backgroundColor: `rgba(147, 51, 234, ${0.2 + (index * 0.2)})`,
            borderColor: `rgba(147, 51, 234, ${0.7 + (index * 0.1)})`,
            pointBackgroundColor: `rgba(147, 51, 234, ${0.8 + (index * 0.1)})`,
        }))
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg mt-8"
        >
            <h3 className="text-xl font-semibold mb-6">Course Comparison Analysis</h3>
            <div className="h-96">
                <Radar data={data} options={options} />
            </div>
        </motion.div>
    );
};

export default CourseComparisonChart;
