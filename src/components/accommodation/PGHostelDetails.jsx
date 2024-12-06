import React from 'react'
import { motion } from 'framer-motion'

const PGHostelDetails = () => {
    const facilities = [
        {
            type: "Premium PG",
            features: [
                { name: "AC Rooms", price: "₹12,000/month" },
                { name: "Attached Bathroom", included: true },
                { name: "WiFi (100 Mbps)", included: true },
                { name: "3 Time Meals", included: true },
                { name: "Laundry Service", included: true },
                { name: "Power Backup", included: true },
                { name: "Study Room", included: true }
            ]
        },
        {
            type: "Standard PG",
            features: [
                { name: "Non-AC Rooms", price: "₹8,000/month" },
                { name: "Common Bathroom", included: true },
                { name: "WiFi (50 Mbps)", included: true },
                { name: "2 Time Meals", included: true },
                { name: "Self Laundry", included: true },
                { name: "Power Backup", included: true }
            ]
        }
    ]

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    PG & Hostel Accommodations
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {facilities.map((facility, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-violet-50">{facility.type}</h2>
                            <div className="space-y-4">
                                {facility.features.map((feature, idx) => (
                                    <div key={idx} className="flex justify-between items-center border-b pb-2">
                                        <span>{feature.name}</span>
                                        <span className="text-green-600">{feature.price || (feature.included ? "✓" : "✗")}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Location Details */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6">Popular Locations</h2>
                    <div className="grid ssm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-4 bg-violet-100 rounded-lg">
                            <h3 className="font-medium">North Campus</h3>
                            <p className="text-sm text-black-600">Near Metro Station</p>
                            <p className="text-sm text-green-600">Starting ₹7,000/month</p>
                        </div>
                        <div className="p-4 bg-violet-100 rounded-lg">
                            <h3 className="font-medium">South Campus</h3>
                            <p className="text-sm text-black-600">Prime Location</p>
                            <p className="text-sm text-green-600">Starting ₹8,000/month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PGHostelDetails
