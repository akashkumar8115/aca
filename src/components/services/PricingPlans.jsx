import React from 'react'
import { motion } from 'framer-motion'

const plans = [
    {
        name: "Basic",
        price: "₹999",
        duration: "per month",
        features: [
            "Career Assessment",
            "Basic Counselling Session",
            "Email Support",
            "Resource Library Access"
        ],
        recommended: false
    },
    {
        name: "Professional",
        price: "₹2499",
        duration: "per month",
        features: [
            "Everything in Basic",
            "2 Counselling Sessions",
            "Resume Building",
            "Interview Preparation",
            "Priority Support"
        ],
        recommended: true
    },
    {
        name: "Premium",
        price: "₹4999",
        duration: "per month",
        features: [
            "Everything in Professional",
            "Unlimited Counselling",
            "Placement Assistance",
            "Industry Connections",
            "Personalized Roadmap"
        ],
        recommended: false
    }
]

const PricingPlans = () => {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-center mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`bg-white rounded-xl shadow-lg p-8 ${
                            plan.recommended ? 'ring-2 ring-violet-50' : ''
                        }`}
                    >
                        {plan.recommended && (
                            <span className="bg-violet-50 text-white px-4 py-1 rounded-full text-sm">
                                Recommended
                            </span>
                        )}
                        <h3 className="text-xl font-semibold mt-4">{plan.name}</h3>
                        <div className="mt-4 mb-6">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-black-600">/{plan.duration}</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-violet-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-black-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                            plan.recommended 
                                ? 'bg-violet-50 text-white hover:bg-violet-100'
                                : 'border-2 border-violet-50 text-violet-50 hover:bg-violet-50 hover:text-white'
                        }`}>
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default PricingPlans
