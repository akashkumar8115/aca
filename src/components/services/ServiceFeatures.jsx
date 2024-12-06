import React from 'react'
import { motion } from 'framer-motion'

const features = [
    {
        title: "Expert Counselors",
        description: "Guidance from industry professionals with years of experience",
        icon: "👨‍🏫"
    },
    {
        title: "Personalized Plans",
        description: "Customized career roadmaps tailored to your goals",
        icon: "🎯"
    },
    {
        title: "Industry Network",
        description: "Access to our vast network of companies and institutions",
        icon: "🌐"
    },
    {
        title: "Placement Support",
        description: "End-to-end assistance for successful placements",
        icon: "🤝"
    },
    {
        title: "Skill Development",
        description: "Focused programs to enhance your capabilities",
        icon: "📈"
    },
    {
        title: "Regular Updates",
        description: "Stay informed about latest opportunities",
        icon: "📱"
    }
]

const ServiceFeatures = () => {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Our Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ServiceFeatures
