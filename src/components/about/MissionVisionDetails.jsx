import React from 'react'
import { motion } from 'framer-motion'

const MissionVisionDetails = () => {
    return (
        <div className="py-12">
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-6">Detailed Mission</h2>
                    <div className="space-y-4 text-black-600">
                        <p>ACA Pvt. Ltd. is dedicated to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Providing cutting-edge career development solutions</li>
                            <li>Offering personalized guidance to every student</li>
                            <li>Creating industry-academia partnerships</li>
                            <li>Ensuring accessibility of quality resources</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-6">Future Vision</h2>
                    <div className="space-y-4 text-black-600">
                        <p>By 2025, we aim to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Reach 100,000+ students nationwide</li>
                            <li>Establish presence in 20+ states</li>
                            <li>Launch innovative learning platforms</li>
                            <li>Create 1000+ industry partnerships</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default MissionVisionDetails
