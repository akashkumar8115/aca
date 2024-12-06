import React from 'react'
import { motion } from 'framer-motion'

const achievements = [
    {
        number: "1000+",
        title: "Students Placed",
        description: "Successfully placed in top companies"
    },
    {
        number: "500+",
        title: "Partner Companies",
        description: "Collaborating for internships and jobs"
    },
    {
        number: "50+",
        title: "College Partners",
        description: "Academic institutions nationwide"
    },
    {
        number: "100+",
        title: "Career Mentors",
        description: "Industry experts providing guidance"
    }
]

const AchievementsSection = () => {
    return (
        <div className="py-12 bg-white rounded-xl shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                {achievements.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-bold text-violet-50 mb-2">{item.number}</h3>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-black-600">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default AchievementsSection
