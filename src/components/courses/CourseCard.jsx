import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg p-6 transition-all"
        >
            <h3 className="text-xl font-semibold mb-3">{course.name}</h3>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Fees:</span>
                    <span className="font-medium">{course.fees}</span>
                </div>
                <div className="mt-4">
                    <span className="text-violet-600 font-medium">Key Features:</span>
                    <ul className="list-disc list-inside mt-2">
                        {course.features.map((feature, index) => (
                            <li key={index} className="text-gray-700">{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
