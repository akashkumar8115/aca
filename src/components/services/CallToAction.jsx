
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CallToAction = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-violet-500 to-violet-100 rounded-2xl p-12 text-center"
        >
            <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Journey?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their careers with our expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    to="/contact-us"
                    className="bg-white text-violet-500 px-8 py-3 rounded-lg font-semibold hover:bg-violet-500 transition-colors hover:text-white"
                >
                    Schedule Consultation
                </Link>
                <Link
                    to="/services/career-counselling"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-500 transition-colors"
                >
                    Learn More
                </Link>
            </div>
        </motion.section>
    )
}

export default CallToAction
