
import React from 'react';
import { motion } from 'framer-motion';
import SkillDevelopment from '../../components/career-guidance/SkillDevelopment';
import MentorshipProgram from '../../components/career-guidance/MentorshipProgram';
import { FaBrain, FaChartLine, FaUsers, FaGraduationCap } from 'react-icons/fa';
import CareerServices from '../../components/career-guidance/CareerServices';

const CareerGuidanceProgram = () => {
    const stats = [
        { icon: <FaBrain />, number: "5000+", text: "Career Assessments" },
        { icon: <FaChartLine />, number: "95%", text: "Success Rate" },
        { icon: <FaUsers />, number: "200+", text: "Expert Mentors" },
        { icon: <FaGraduationCap />, number: "50+", text: "Industry Partners" }
    ];

    return (
        <div classNamae="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-[80vh] flex items-center justify-center bg-blue-100"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
                    >
                        Shape Your Future with Expert Career Guidance
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 mb-8"
                    >
                        Discover your potential and chart your path to success with personalized guidance
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors"
                    >
                        Start Your Journey
                    </motion.button>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-16 px-4 -mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                                    {stat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            {/* <SelfAssessment />
            <SkillDevelopment />
            <CareerPlanning /> */}

            {/* mushaya ji added you file  */}
            <CareerServices/>






            <MentorshipProgram />
        </div>
    );
};

export default CareerGuidanceProgram;
