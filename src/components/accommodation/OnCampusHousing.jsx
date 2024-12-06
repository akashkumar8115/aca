
import React from 'react';
import { motion } from 'framer-motion';

const OnCampusHousing = () => {
    const housingOptions = [
        {
            type: "Traditional Dormitory",
            features: ["Shared Rooms", "Community Bathrooms", "Common Areas", "Meal Plan Included"],
            price: "₹8,000/month",
            availability: "Limited Spots"
        },
        {
            type: "Suite-Style Living",
            features: ["Private Rooms", "Shared Living Area", "Attached Bathroom", "Kitchenette"],
            price: "₹12,000/month",
            availability: "Available"
        },
        {
            type: "Student Apartments",
            features: ["Full Kitchen", "Private Bedroom", "Living Room", "Study Area"],
            price: "₹15,000/month",
            availability: "Waitlisted"
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
                    On-Campus Housing Options
                </motion.h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {housingOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-4">{option.type}</h2>
                                <ul className="space-y-2 mb-4">
                                    {option.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <span className="mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                                    <span className="font-semibold text-violet-600">{option.price}</span>
                                    <span className={`px-3 py-1 rounded-full text-sm ${option.availability === 'Available'
                                            ? 'bg-green-100 text-green-800'
                                            : option.availability === 'Waitlisted'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                        {option.availability}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Information */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6">Important Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-medium mb-2">Application Process</h3>
                            <p className="text-gray-600">Submit your housing application early to secure your preferred accommodation option.</p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Move-in Dates</h3>
                            <p className="text-gray-600">Fall Semester: August 15-20<br />Spring Semester: January 5-10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnCampusHousing;
