import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaComments, FaBriefcase } from 'react-icons/fa';

const SkillDevelopment = () => {
    const workshops = [
        {
            category: "Technical Skills",
            icon: <FaLaptopCode />,
            courses: [
                {
                    title: "Programming Fundamentals",
                    duration: "8 weeks",
                    level: "Beginner"
                },
                {
                    title: "Data Analysis",
                    duration: "6 weeks",
                    level: "Intermediate"
                },
                {
                    title: "Cloud Computing",
                    duration: "10 weeks",
                    level: "Advanced"
                }
            ]
        },
        {
            category: "Soft Skills",
            icon: <FaComments />,
            courses: [
                {
                    title: "Communication Skills",
                    duration: "4 weeks",
                    level: "All Levels"
                },
                {
                    title: "Leadership Development",
                    duration: "6 weeks",
                    level: "Intermediate"
                },
                {
                    title: "Problem Solving",
                    duration: "5 weeks",
                    level: "All Levels"
                }
            ]
        },
        {
            category: "Professional Skills",
            icon: <FaBriefcase />,
            courses: [
                {
                    title: "Project Management",
                    duration: "8 weeks",
                    level: "Intermediate"
                },
                {
                    title: "Business Analytics",
                    duration: "6 weeks",
                    level: "Advanced"
                },
                {
                    title: "Digital Marketing",
                    duration: "7 weeks",
                    level: "Beginner"
                }
            ]
        }
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Skill Development Workshops</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enhance your capabilities with our comprehensive skill development programs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {workshops.map((workshop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="text-blue-600 text-3xl mb-4 flex items-center gap-2">
                                    {workshop.icon}
                                    <h3 className="text-xl font-bold">{workshop.category}</h3>
                                </div>
                                <div className="space-y-4">
                                    {workshop.courses.map((course, idx) => (
                                        <div key={idx} className="border-b pb-4 last:border-b-0">
                                            <h4 className="font-semibold mb-2">{course.title}</h4>
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span>{course.duration}</span>
                                                <span>{course.level}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50">
                                <button className="w-full py-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                    View All Courses →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillDevelopment;
