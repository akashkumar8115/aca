
import React from 'react';
import { motion } from 'framer-motion';

const SafetyTips = () => {
    const safetyCategories = [
        {
            title: "Personal Safety",
            tips: [
                "Always be aware of your surroundings",
                "Keep emergency contacts handy",
                "Use campus escort services at night",
                "Travel in groups when possible"
            ]
        },
        {
            title: "Accommodation Safety",
            tips: [
                "Keep doors and windows locked",
                "Know emergency exits",
                "Install security systems if needed",
                "Don't share location publicly"
            ]
        },
        {
            title: "Digital Safety",
            tips: [
                "Use strong passwords",
                "Be careful with social media",
                "Protect personal information",
                "Use secure wifi networks"
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100">
            <div className="w-11/12 lg:w-10/12 mx-auto py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl font-bold mb-4">Safety Tips for Students</h1>
                    <p className="text-gray-600">Your safety is our priority</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {safetyCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-6"
                        >
                            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                            <ul className="space-y-3">
                                {category.tips.map((tip, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                        <span className="mr-2">•</span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Emergency Contacts Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 bg-white rounded-xl shadow-lg p-6"
                >
                    <h2 className="text-2xl font-semibold mb-6">Emergency Contacts</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-medium mb-2">Campus Security</h3>
                            <p className="text-violet-600">1800-XXX-XXXX</p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Medical Emergency</h3>
                            <p className="text-violet-600">108</p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Police</h3>
                            <p className="text-violet-600">100</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SafetyTips;
