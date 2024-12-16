import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InternshipType from '../components/internshipJob/InternshipType';
// import Opportunities from '../components/internshipJob/Opportunities';

const InternshipsAndJobs = () => {
    return (
        <div className='flex flex-col xs:flex-row justify-center items-center'>

            <div className="bg-gradient-to-br from-gray-50 to-blue-100 ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto px-4"
                >
                    <div className="flex flex-col md:flex-row items-center min-h-screen">
                        <div className="w-full md:w-1/2 text-center md:text-left p-8 ">
                            <motion.h1
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl font-bold text-gray-800 mb-6"
                            >
                                Start Your Career Journey
                            </motion.h1>
                            <motion.p
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-600 mb-4"
                            >
                                Discover exciting internship opportunities that will help you gain valuable experience and kickstart your career.
                            </motion.p>
                            <motion.div
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link
                                    to="/services/internships"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-black rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Explore Internships
                                </Link>
                            </motion.div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <motion.img
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                src="https://idreamcareer.com/wp-content/uploads/2020/03/Tips-for-Interns.jpg"
                                alt="Internship Illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <InternshipType />
            <div className="w-full flex items-center bg-gradient-to-br from-gray-50 to-blue-100">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto px-4"
                >
                    <div className="flex flex-col md:flex-row items-center min-h-screen">
                        <div className="w-full md:w-1/2 text-center md:text-left p-8">
                            <motion.h1
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl font-bold text-gray-800 "
                            >
                                Start Your Career Journey
                            </motion.h1>
                            <motion.p
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-600"
                            >
                                Discover exciting internship opportunities that will help you gain valuable experience and kickstart your career.
                            </motion.p>
                            <motion.div
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link
                                    to="/services/jobs"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-black rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Explore jobs
                                </Link>
                            </motion.div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <motion.img
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                src="https://www.brahmaait.com/wp-content/uploads/2018/09/New-Job-Trends-in-IT-Sector.jpg"
                                alt="Internship Illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default InternshipsAndJobs;
