
import React from 'react';
import { motion } from 'framer-motion';

const OffCampusHousing = () => {
    const housingOptions = [
        {
            area: "North Campus",
            types: ["1BHK", "2BHK", "PG"],
            priceRange: "₹8,000 - ₹20,000",
            distance: "0.5-2 km",
            amenities: ["24/7 Security", "Water Supply", "Power Backup"]
        },
        {
            area: "South Campus",
            types: ["2BHK", "3BHK", "Shared Flats"],
            priceRange: "₹12,000 - ₹25,000",
            distance: "1-3 km",
            amenities: ["Gym", "Parking", "Maintenance"]
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
                    <h1 className="text-3xl font-bold mb-4">Off-Campus Housing</h1>
                    <p className="text-gray-600">Find your perfect accommodation near campus</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {housingOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-xl shadow-lg p-6"
                        >
                            <h2 className="text-xl font-semibold mb-4">{option.area}</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-700">Available Types</h3>
                                    <div className="flex gap-2 mt-2">
                                        {option.types.map((type, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm">
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-700">Price Range</h3>
                                    <p className="text-violet-600 font-semibold">{option.priceRange}</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-700">Distance from Campus</h3>
                                    <p>{option.distance}</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-700">Amenities</h3>
                                    <ul className="mt-2 space-y-1">
                                        {option.amenities.map((amenity, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <span className="mr-2">•</span>
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tips Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                >
                    <h2 className="text-2xl font-semibold mb-6">Tips for Off-Campus Housing</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-medium mb-2">Research</h3>
                            <p className="text-gray-600">Compare prices and amenities in different areas before making a decision.</p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Documentation</h3>
                            <p className="text-gray-600">Keep all rental agreements and payment receipts properly documented.</p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Transportation</h3>
                            <p className="text-gray-600">Consider proximity to public transport and campus shuttle services.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OffCampusHousing;
