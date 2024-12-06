import React from 'react'
import { motion } from 'framer-motion'

const ScholarshipDetails = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Available Scholarships
                </motion.h1>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Merit-Based Scholarships</h2>
                        <ul className="space-y-3 text-black-600">
                            <li>• Up to 100% tuition waiver</li>
                            <li>• Academic excellence rewards</li>
                            <li>• Performance-based incentives</li>
                            <li>• Special talent recognition</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Government Scholarships</h2>
                        <ul className="space-y-3 text-black-600">
                            <li>• State-sponsored schemes</li>
                            <li>• Central government programs</li>
                            <li>• Minority scholarships</li>
                            <li>• Sports scholarships</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScholarshipDetails
