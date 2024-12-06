import React from 'react';
import { motion } from 'framer-motion';

const TestStructure = () => {
    const testTypes = [
        {
            title: "Class 10",
            description: "Foundation level assessment focusing on core subjects and analytical skills",
            subjects: ["Mathematics", "Science", "English", "Logical Reasoning"]
        },
        {
            title: "Class 11 & 12",
            description: "Advanced assessment aligned with higher secondary curriculum",
            subjects: ["Physics", "Chemistry", "Mathematics", "Aptitude"]
        },
        {
            title: "College Level",
            description: "Specialized tests for various streams and courses",
            subjects: ["Core Subjects", "Field Specifics", "Industry Knowledge", "Analytical Skills"]
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Test Structure</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testTypes.map((test, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-4 text-violet-50">{test.title}</h3>
                            <p className="text-black-600 mb-4">{test.description}</p>
                            <ul className="space-y-2">
                                {test.subjects.map((subject, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <span className="w-2 h-2 bg-violet-50 rounded-full mr-2"></span>
                                        {subject}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestStructure;
