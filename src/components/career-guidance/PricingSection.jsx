import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PricingSection = () => {
    const plans = [
        {
            name: "Basic",
            price: "₹9,999",
            duration: "3 months",
            features: [
                "Career Assessment Tests",
                "Basic Skill Development Workshops",
                "Email Support",
                "Career Resources Library",
                "Monthly Group Sessions"
            ],
            recommended: false
        },
        {
            name: "Professional",
            price: "₹24,999",
            duration: "6 months",
            features: [
                "All Basic Features",
                "1-on-1 Mentorship Sessions",
                "Advanced Workshops",
                "Interview Preparation",
                "Resume Building",
                "Priority Support",
                "Industry Network Access"
            ],
            recommended: true
        },
        {
            name: "Enterprise",
            price: "₹49,999",
            duration: "12 months",
            features: [
                "All Professional Features",
                "Dedicated Career Coach",
                "Placement Assistance",
                "Leadership Training",
                "International Career Guidance",
                "Lifetime Alumni Network",
                "Custom Career Roadmap"
            ],
            recommended: false
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Investment in Your Future</h2>
                    <p className="text-gray-600">Choose the plan that best fits your career goals</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.recommended ? 'ring-2 ring-blue-600' : ''
                                }`}
                        >
                            {plan.recommended && (
                                <div className="bg-blue-600 text-white text-center py-2">
                                    Recommended
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold">{plan.price}</span>
                                    <span className="text-gray-600">/{plan.duration}</span>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <FaCheck className="text-green-500 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-2 rounded-lg font-semibold ${plan.recommended
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    } transition-colors`}>
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
