import React from 'react'
import { motion } from 'framer-motion'

const CollegeDetails = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* College Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold mb-3">Engineering Colleges</h3>
                        <div className="space-y-2 text-black-600">
                            <p className="text-sm">• Top IITs and NITs</p>
                            <p className="text-sm">• State Engineering Colleges</p>
                            <p className="text-sm">• Private Universities</p>
                            <p className="text-green-600 text-sm">Starting from ₹1.5L/year</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollegeDetails