import React from 'react'
import { motion } from 'framer-motion'

const awards = [
    {
        year: "2024",
        title: "Best EdTech Startup",
        organization: "India Education Awards",
        description: "Recognized for innovative career development solutions"
    },
    {
        year: "2023",
        title: "Excellence in Student Placement",
        organization: "Higher Education Summit",
        description: "Achieved 95% placement rate across programs"
    },
    {
        year: "2023",
        title: "Innovation in Career Guidance",
        organization: "Tech Education Forum",
        description: "AI-powered career counseling platform"
    }
]

const AwardsRecognition = () => {
    return (
        <div className="py-12 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-8 text-center">Awards & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-6 px-6">
                {awards.map((award, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="border rounded-lg p-6"
                    >
                        <div className="text-violet-50 font-medium mb-2">{award.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                        <div className="text-sm text-black-600 mb-3">{award.organization}</div>
                        <p className="text-black-600">{award.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default AwardsRecognition
