import React from 'react'
import { motion } from 'framer-motion'

const values = [
    {
        title: "Innovation First",
        description: "Constantly pushing boundaries in career development solutions",
        icon: "🚀"
    },
    {
        title: "Student Success",
        description: "Dedicated to achieving optimal outcomes for every student",
        icon: "🎓"
    },
    {
        title: "Integrity",
        description: "Maintaining highest standards of professional ethics",
        icon: "⭐"
    },
    {
        title: "Collaboration",
        description: "Building strong partnerships with industry leaders",
        icon: "🤝"
    }
]

const TeamValues = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 rounded-xl shadow-lg text-center"
                    >
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-black-600">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TeamValues
