import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div className=''
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Link
                to={service.path}
                className="group h-full block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:shadow-lg transition-shadow"
            >
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-violet-500">
                        {service.title}
                    </h2>
                    <p className="text-black-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-violet-500">
                        <span>Learn More</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default ServiceCard
