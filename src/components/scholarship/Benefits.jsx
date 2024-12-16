import React from 'react';
import { motion } from 'framer-motion';
import { FaBookReader, FaHandshake, FaLaptopCode, FaUserTie } from 'react-icons/fa';

const Benefits = () => {
    const benefits = [
        {
            icon: <FaBookReader />,
            title: "Academic Resources",
            description: "Access to premium study materials, digital libraries, and research papers"
        },
        {
            icon: <FaHandshake />,
            title: "Mentorship",
            description: "One-on-one guidance from industry experts and academic professionals"
        },
        {
            icon: <FaLaptopCode />,
            title: "Skill Development",
            description: "Specialized workshops, certification courses, and technical training"
        },
        {
            icon: <FaUserTie />,
            title: "Career Support",
            description: "Placement assistance, interview preparation, and industry networking"
        }
    ];

    return (
        <section className="py-16 px-4 bg-violet-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-lg text-center"
                        >
                            <div className="text-violet-500 text-3xl mb-4 flex justify-center">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                            <p className="text-black-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
