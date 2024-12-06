
import React from 'react';
import { motion } from 'framer-motion';

const StudentHousingCommunities = () => {
    const communities = [
        {
            name: "Student Village",
            features: [
                "24/7 Security",
                "Study Rooms",
                "Fitness Center",
                "Community Events",
                "High-Speed Internet"
            ],
            price: "₹15,000/month",
            distance: "1 km from campus"
        },
        {
            name: "Scholar's Haven",
            features: [
                "Swimming Pool",
                "Game Room",
                "Library",
                "Cafeteria",
                "Laundry Services"
            ],
            price: "₹18,000/month",
            distance: "0.5 km from campus"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100">
            <div className="w-11/12 lg:w-10/12 mx-auto py-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Student Housing Communities
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {communities.map((community, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4">{community.name}</h2>
                            <ul className="space-y-3 mb-6">
                                {community.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                        <span className="mr-2">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between items-center pt-4 border-t">
                                <span className="font-semibold text-violet-600">{community.price}</span>
                                <span className="text-gray-600">{community.distance}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentHousingCommunities;
