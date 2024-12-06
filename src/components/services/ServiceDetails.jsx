import React from 'react'
import { motion } from 'framer-motion'

const ServiceDetails = ({ service }) => {
    const benefits = [
        {
            title: "Expert Guidance",
            description: "Get mentored by industry professionals with years of experience",
            icon: "👨‍🏫"
        },
        {
            title: "Personalized Approach",
            description: "Customized solutions tailored to your specific needs and goals",
            icon: "🎯"
        },
        {
            title: "Industry Insights",
            description: "Stay updated with latest trends and opportunities in your field",
            icon: "📊"
        },
        {
            title: "Continuous Support",
            description: "Regular follow-ups and assistance throughout your journey",
            icon: "🤝"
        }
    ]

    return (
        <div className="py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                    <p className="text-lg text-black-600">{service.description}</p>
                    <ul className="space-y-4">
                        {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="text-violet-50">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <img 
                        src={service.image} 
                        alt={service.title}
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-lg"
                    >
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-black-600">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ServiceDetails
