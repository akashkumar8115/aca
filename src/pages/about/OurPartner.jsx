import React from 'react'
import { partnerData } from '../../data/partner';
import { motion } from 'framer-motion'

import partner from '../../assets/partner.jpg'
const OurPartner = () => {

    return (
        <section className="mt-24 py-12 ">
            <div className='lg:w-10/12 w-11/12 mx-auto flex flex-col gap-y-16 '>

                <div className=" flex xmd:flex-row flex-col items-center gap-8 justify-between ">
                    <div data-aos="fade-right" className="xmd:w-[55%]">
                        <h2 className="xlg:text-5xl md:text-4xl text-3xl font-bold text-green-500 xmd:text-left text-center mb-4">Our Partners</h2>
                        <h3 className="mb-4 text-xl font-semibold text-black-900 xmd:text-left text-center">
                            We believe in the power of collaboration.
                        </h3>
                        <p className="text-black-900 text-justify">
                            Our partnerships are founded on trust, shared expertise, and a common goal of success. At the heart of our growth is a strong network of partners who bring diverse perspectives and strengths. Together, we achieve excellence and deliver services that make a difference for our clients and communities.
                        </p>
                    </div>

                    <div data-aos="fade-left" className="flex justify-center xmd:w-[40%] w-[80%]">
                        <img
                            src={partner}
                            alt="Our Partner"
                            className="object-cover h-full w-full  "
                        />
                    </div>
                </div>

                <section className='w-full sm:py-24 py-16 bg-gray-50'>
                    <div className='w-11/12 lg:w-10/12 mx-auto'>
                        <div className='text-center mb-16'>
                            <span className='text-violet-600 font-semibold tracking-wide uppercase'>Our Network</span>
                            <h2 className='text-4xl md:text-5xl font-bold mt-4'>Trusted By Industry Leaders</h2>
                            <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
                                Partnering with leading companies to provide the best opportunities for our students
                            </p>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center'>
                            {partnerData.map((partner, index) => (
                                <motion.div
                                    key={partner.id}
                                    initial={{ opacity: 1, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow'
                                >
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className='h-25 w-25 sm:h-30 sm:w-20 object-contain filter hover:grayscale-0 transition-all duration-300'
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <div className='mt-16 text-center'>
                            <button className='px-8 py-3 bg-green-400 text-black rounded-lg hover:bg-green-500 hover:text-white transition-colors active:bg-green-600'>
                                Become a Partner
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default OurPartner