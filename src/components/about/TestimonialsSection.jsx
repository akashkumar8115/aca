import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
    {
        name: "Rahul Kumar",
        role: "Software Engineer",
        company: "Tech Solutions Ltd",
        quote: "ACA's guidance was instrumental in landing my dream job."
    },
    {
        name: "Priya Singh",
        role: "Data Analyst",
        company: "Analytics Corp",
        quote: "The mentorship program helped me transition into data analytics smoothly."
    },
    {
        name: "Amit Patel",
        role: "Product Manager",
        company: "Innovation Hub",
        quote: "Their career counseling gave me clarity about my career path."
    }
]

const TestimonialsSection = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <p className="text-black-600 mb-4">"{item.quote}"</p>
                        <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-black-600">{item.role}</p>
                            <p className="text-sm text-violet-50">{item.company}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TestimonialsSection
