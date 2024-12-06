import React from 'react';
import { motion } from 'framer-motion';

const timelineData = {
    'B.Tech': [
        {
            year: 'Year 1',
            subjects: ['Engineering Mathematics', 'Physics', 'Basic Electronics', 'Programming Fundamentals'],
            projects: ['Basic Programming Project', 'Physics Lab Experiments']
        },
        {
            year: 'Year 2',
            subjects: ['Data Structures', 'Computer Architecture', 'Digital Logic', 'Object-Oriented Programming'],
            projects: ['Data Structures Implementation', 'Mini Project']
        },
        {
            year: 'Year 3',
            subjects: ['Database Management', 'Operating Systems', 'Computer Networks', 'Web Technologies'],
            projects: ['Database Project', 'Networking Project']
        },
        {
            year: 'Year 4',
            subjects: ['Artificial Intelligence', 'Cloud Computing', 'Information Security', 'Electives'],
            projects: ['Major Project', 'Industry Internship']
        }
    ]
};

const CourseTimeline = ({ course }) => {
    const timeline = timelineData[course] || [];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-8 mt-8"
        >
            <h3 className="text-2xl font-bold mb-8">Course Timeline</h3>
            <div className="relative">
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="mb-8 flex"
                    >
                        <div className="flex-shrink-0 w-24 text-violet-600 font-bold">
                            {item.year}
                        </div>
                        <div className="ml-8 border-l-2 border-violet-200 pl-8 pb-8">
                            <h4 className="text-lg font-semibold mb-4">Subjects</h4>
                            <ul className="list-disc list-inside mb-4">
                                {item.subjects.map((subject, idx) => (
                                    <li key={idx} className="text-gray-700 mb-2">{subject}</li>
                                ))}
                            </ul>
                            <h4 className="text-lg font-semibold mb-4">Projects</h4>
                            <ul className="list-disc list-inside">
                                {item.projects.map((project, idx) => (
                                    <li key={idx} className="text-gray-700 mb-2">{project}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default CourseTimeline;
