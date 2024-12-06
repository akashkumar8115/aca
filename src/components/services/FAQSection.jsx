import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
    {
        question: "How do I choose the right career path?",
        answer: "Our expert counselors conduct thorough assessments of your interests, skills, and aspirations. We use advanced tools and industry insights to help you make an informed decision about your career path."
    },
    {
        question: "What makes ACA different from other career counseling services?",
        answer: "We offer personalized guidance with industry experts, comprehensive support throughout your journey, and maintain strong connections with top companies and educational institutions."
    },
    {
        question: "How long does the counseling process take?",
        answer: "The duration varies based on individual needs. Typically, our basic assessment and counseling takes 2-3 sessions, while comprehensive career planning may extend to 4-6 sessions."
    },
    {
        question: "Do you provide placement assistance?",
        answer: "Yes, we offer end-to-end placement support including resume building, interview preparation, and direct connections with hiring companies through our industry network."
    }
]

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <button
                            className="w-full p-6 text-left flex justify-between items-center"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <span className="font-semibold">{faq.question}</span>
                            <svg
                                className={`w-6 h-6 transform transition-transform ${
                                    activeIndex === index ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-black-600">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default FAQSection
