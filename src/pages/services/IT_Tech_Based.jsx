
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStore, FaBuilding, FaRocket } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import ItTechServices from './ItTechServices';

const IT_Tech_Based = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
                <div className="relative z-10 text-center text-black px-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Admin Career Academy
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Empowering Future Tech Leaders
                    </motion.p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-16 px-4 md:px-8">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Our Company</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <StatsCard
                            title="Years of Excellence"
                            value="15+"
                            description="Industry experience in tech education"
                        />
                        <StatsCard
                            title="Expert Instructors"
                            value="50+"
                            description="Industry professionals teaching"
                        />
                        <StatsCard
                            title="Student Placement"
                            value="95%"
                            description="Successful career placement rate"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Learning Resources */}
            <section className="bg-gray-50 py-16 px-4 md:px-8">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Learning Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ResourceCard
                            icon={<FaGraduationCap className="text-4xl" />}
                            title="Learning Centers"
                            description="State-of-the-art IT labs and training facilities"
                        />
                        <ResourceCard
                            icon={<FaStore className="text-4xl" />}
                            title="Online Store"
                            description="Premium learning materials and resources"
                        />
                        <ResourceCard
                            icon={<FaBuilding className="text-4xl" />}
                            title="Industry Partners"
                            description="Collaborations with leading tech companies"
                        />
                        <ResourceCard
                            icon={<FaRocket className="text-4xl" />}
                            title="Startup Hub"
                            description="Incubation and mentorship programs"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Programs Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
                    {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProgramCard
                            title="Full Stack Development"
                            duration="6 months"
                            features={["MERN Stack", "Cloud Computing", "DevOps"]}
                        />
                        <ProgramCard
                            title="AI & Machine Learning"
                            duration="8 months"
                            features={["Deep Learning", "Neural Networks", "Computer Vision"]}
                        />
                        <ProgramCard
                            title="Data Science"
                            duration="6 months"
                            features={["Python", "Statistical Analysis", "Big Data"]}
                        />
                    </div> */}
                    <ItTechServices/>
                </div>
            </section>
        </div>
    );
};

// Helper Components
const StatsCard = ({ title, value, description }) => (
    <motion.div
        className="bg-white p-6 rounded-lg shadow-lg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
    >
        <h3 className="text-4xl font-bold text-blue-600 mb-2">{value}</h3>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const ResourceCard = ({ icon, title, description }) => (
    <motion.div
        className="bg-white p-6 rounded-lg shadow-lg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
    >
        <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const ProgramCard = ({ title, duration, features }) => (
    <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
    >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">Duration: {duration}</p>
        <ul className="space-y-2">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default IT_Tech_Based;
