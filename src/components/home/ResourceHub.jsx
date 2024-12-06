import React from 'react'
import { resources } from '../../data/resources'
import { motion } from 'framer-motion'

const ResourceHub = () => {
    return (
        <section className='py-20'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>Career Resource Hub</h2>
                    <p className='text-gray-600'>Free resources to accelerate your career growth</p>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                    {resources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'
                        >
                            <div className='text-violet-600 text-3xl mb-4'>{resource.icon}</div>
                            <h3 className='text-xl font-bold mb-2'>{resource.title}</h3>
                            <p className='text-gray-600 mb-4'>{resource.description}</p>
                            <a href={resource.link} className='text-violet-600 font-semibold hover:text-violet-700'>
                                Learn More →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ResourceHub
