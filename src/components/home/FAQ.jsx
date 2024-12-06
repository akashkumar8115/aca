import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqData } from '../../data/faq'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <section className='py-20'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>Frequently Asked Questions</h2>
                    <p className='text-gray-600'>Find answers to common questions about our services</p>
                </div>

                <div className='max-w-3xl mx-auto space-y-4'>
                    {faqData.map((faq, index) => (
                        <div
                            key={faq.id}
                            className='bg-white rounded-lg shadow-md overflow-hidden'
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50'
                            >
                                <span className='font-semibold'>{faq.question}</span>
                                <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    ↓
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className='overflow-hidden'
                                    >
                                        <p className='px-6 py-4 text-gray-600 border-t'>
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
