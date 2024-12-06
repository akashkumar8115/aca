import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const ScholarshipTiers = () => {
    const tiers = [
        {
            icon: <FaTrophy className="text-4xl text-yellow-400" />,
            title: "Top 10 Ranks",
            benefits: [
                "100% tuition fee coverage",
                "Exclusive mentorship program",
                "Industry internship opportunities",
                "Research project funding"
            ],
            color: "bg-gradient-to-br from-yellow-100 to-yellow-200"
        },
        {
            icon: <FaMedal className="text-4xl text-gray-400" />,
            title: "Top 50 Ranks",
            benefits: [
                "75% tuition fee coverage",
                "Access to premium resources",
                "Career guidance sessions",
                "Skill development workshops"
            ],
            color: "bg-gradient-to-br from-gray-100 to-gray-200"
        },
        {
            icon: <FaStar className="text-4xl text-bronze-400" />,
            title: "Top 500 Ranks",
            benefits: [
                "50% tuition fee coverage",
                "Study material support",
                "Online course access",
                "Monthly webinars"
            ],
            color: "bg-gradient-to-br from-orange-100 to-orange-200"
        }
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Scholarship Tiers</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className={`rounded-lg shadow-lg overflow-hidden ${tier.color}`}
                        >
                            <div className="p-6">
                                <div className="flex justify-center mb-4">{tier.icon}</div>
                                <h3 className="text-xl font-bold text-center mb-4">{tier.title}</h3>
                                <ul className="space-y-3">
                                    {tier.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <span className="w-2 h-2 bg-violet-50 rounded-full mr-2"></span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScholarshipTiers;
