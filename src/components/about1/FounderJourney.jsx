import React from 'react'
import { motion } from 'framer-motion'

const journeySteps = [
    {
        phase: "Early Education",
        details: [
            "Jawahar Navodaya Vidyalaya, Kirtanpur, Bahraich (UP)",
            "Strong academic foundation",
            "Leadership roles in school activities"
        ]
    },
    {
        phase: "Higher Education",
        details: [
            "JEE Mains 2020 - First Attempt Success",
            "Panjab University, Chandigarh",
            "B.E. Electronics and Communication Engineering (2020-2024)"
        ]
    },
    {
        phase: "Entrepreneurial Vision",
        details: [
            "Identified education-industry gap",
            "Conceptualized ACA Pvt. Ltd.",
            "Built initial team and network"
        ]
    }
]

const FounderJourney = () => {
    return (
        <section className="pb-16  bg-violet-100">

        <div className="w-11/12 lg:w-10/12 mx-auto bg-white py-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-8 text-center">Founder's Journey</h2>
            <div className="max-w-4xl mx-auto px-6">
                {journeySteps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-8 last:mb-0"
                    >
                        <h3 className="text-xl font-semibold text-green-600 mb-4">{step.phase}</h3>
                        <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-violet-500 rounded-full mt-2"></span>
                                    <span className="text-black-600">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
        </section>
    )
}

export default FounderJourney
