
import React from 'react';
import { motion } from 'framer-motion';

const BudgetingTips = () => {
    const tips = [
        {
            category: "Housing",
            tips: [
                "Compare different housing options",
                "Consider sharing accommodation",
                "Look for early bird discounts",
                "Budget for utilities separately"
            ]
        },
        {
            category: "Daily Expenses",
            tips: [
                "Cook meals at home",
                "Use student discounts",
                "Buy groceries in bulk",
                "Track expenses with apps"
            ]
        },
        {
            category: "Transportation",
            tips: [
                "Use public transport",
                "Consider cycling",
                "Share rides with classmates",
                "Get student travel passes"
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
                    <h1 className="text-3xl font-bold mb-4">Student Budgeting Tips</h1>
                    <p className="text-gray-600">Smart ways to manage your expenses</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tips.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-6"
                        >
                            <h2 className="text-xl font-semibold mb-4">{section.category}</h2>
                            <ul className="space-y-3">
                                {section.tips.map((tip, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                        <span className="mr-2">•</span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BudgetingTips;
