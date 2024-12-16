import React from 'react'
import { motion } from 'framer-motion'

const milestones = [
    {
        year: 2021,
        events: [
            "Founded by Mohd Shadab Qusari",
            "Initial team formation",
            "First office established in Chandigarh"
        ]
    },
    {
        year: 2022,
        events: [
            "Expanded to 5 cities",
            "Launched online platform",
            "100+ successful placements"
        ]
    },
    {
        year: 2023,
        events: [
            "Partnership with 50+ colleges",
            "Digital transformation initiative",
            "1000+ student community"
        ]
    },
    {
        year: 2024,
        events: [
            "Pan-India presence",
            "Launch of AI-powered career guidance",
            "Industry recognition awards"
        ]
    }
]

const CompanyHistory = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Growth Story</h2>
            <div className="space-y-8">
                {milestones.map((milestone, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white p-6 rounded-xl shadow-lg"
                    >
                        <h3 className="text-xl font-semibold text-violet-500 mb-4">{milestone.year}</h3>
                        <ul className="space-y-2">
                            {milestone.events.map((event, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                                    <span className="text-black-600">{event}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default CompanyHistory
