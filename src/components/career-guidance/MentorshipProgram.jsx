import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';

const MentorshipProgram = () => {
    const mentorshipFeatures = [
        {
            icon: <FaUserTie />,
            title: "Expert Mentors",
            description: "Connect with industry professionals who provide personalized guidance",
            benefits: [
                "One-on-one sessions",
                "Industry insights",
                "Career strategy planning",
                "Network building"
            ]
        },
        {
            icon: <FaHandshake />,
            title: "Peer Support",
            description: "Join a community of like-minded individuals on similar career paths",
            benefits: [
                "Group discussions",
                "Experience sharing",
                "Collaborative learning",
                "Networking events"
            ]
        },
        {
            icon: <FaLightbulb />,
            title: "Career Resources",
            description: "Access comprehensive resources for continuous growth",
            benefits: [
                "Industry reports",
                "Career guides",
                "Interview preparation",
                "Resume building"
            ]
        },
        {
            icon: <FaUsers />,
            title: "Alumni Network",
            description: "Connect with successful program graduates",
            benefits: [
                "Success stories",
                "Mentorship opportunities",
                "Industry connections",
                "Job referrals"
            ]
        }
    ];

    return (
        <section className="py-16 px-4 bg-blue-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Mentorship & Support</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get guidance from industry experts and join a supportive community of professionals
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentorshipFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-blue-600 text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 mb-4">{feature.description}</p>
                            <ul className="space-y-2">
                                {feature.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mt-12"
                >
                    <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                        Join Our Mentorship Program
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default MentorshipProgram;
