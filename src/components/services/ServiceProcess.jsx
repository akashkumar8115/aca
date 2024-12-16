import React from 'react'
import { motion } from 'framer-motion'

const processSteps = [
    {
        number: "01",
        title: "Initial Consultation",
        description: "Free consultation to understand your goals and requirements",
        icon: "🎯"
    },
    {
        number: "02",
        title: "Assessment & Analysis",
        description: "Comprehensive evaluation of skills and career aspirations",
        icon: "📊"
    },
    {
        number: "03",
        title: "Custom Strategy",
        description: "Tailored action plan based on your unique profile",
        icon: "📋"
    },
    {
        number: "04",
        title: "Implementation",
        description: "Execute the plan with our guidance and support",
        icon: "🚀"
    }
]

const ServiceProcess = () => {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-center mb-12">How We Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-xl shadow-lg p-6 relative"
                    >
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <div className="absolute top-4 right-4 text-3xl font-bold text-violet-500 opacity-100">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-black-600">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ServiceProcess
