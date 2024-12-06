import React from 'react'
import { motion } from 'framer-motion'
import { successStories } from '../../data/successStories'
import { useInView } from 'react-intersection-observer'

const SuccessStories = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    return (
        <section className='py-20'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>Success Stories</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>Real stories from our alumni who transformed their careers</p>
                </div>

                <div ref={ref} className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    {successStories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='bg-white rounded-xl shadow-lg overflow-hidden'
                        >
                            <img src={story.image} alt={story.name} className='w-full h-65 object-cover' />
                            <div className='p-6'>
                                <h3 className='text-xl font-bold mb-2'>{story.name}</h3>
                                <p className='text-violet-600 mb-4'>{story.role} at <span><b>{story.company}</b></span></p> 
                                <p className='text-gray-600'>{story.testimony}</p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessStories
