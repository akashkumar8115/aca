import React from 'react'
import { motion } from 'framer-motion'

const timelineData = [
    {
        year: "2021",
        title: "Foundation",
        description: "ACA Pvt. Ltd. was established with a vision to transform career development"
    },
    {
        year: "2022",
        title: "Team Expansion",
        description: "Manish Yadav and Asfaq Srivastava joined as co-founders"
    },
    {
        year: "2023",
        title: "Digital Innovation",
        description: "Launch of comprehensive online platform with Akash Kumar joining as Technical Lead"
    },
    {
        year: "2024",
        title: "Growth & Impact",
        description: "Expanding services and reaching students across India"
    }
]

const CompanyTimeline = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Journey</h2>
            <div className="space-y-8">
                {timelineData.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex gap-4"
                    >
                        <div className="w-24 font-bold text-violet-500">{item.year}</div>
                        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-black-600">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default CompanyTimeline
