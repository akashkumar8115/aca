import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { careerServiceData } from '../../data/career-service';

const CareerServices = () => {

    const [showAll, setShowAll] = useState(false);

    // Display only the first 6 cards initially, or all if `showAll` is true
    const visibleData = showAll ? careerServiceData : careerServiceData.slice(0, 4);


  return (
    <section>
            <div className="lg:w-10/12 w-11/12 mx-auto md:p-8 flex flex-col gap-y-12">

                <div className='flex justify-between items-center '>
                    <h2 className=" md:text-3xl sm:text-2xl text-xl font-semibold ">Our Services</h2>

                    
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            className=" py-2  transition bg-blue-500 rounded-lg text-white shadow-md px-4 md:py-3 bg-green-500 hover:bg-violet-50 focus:outline-none "
                          
                        >
                            {showAll ? "View Less" : "View More"}
                        </motion.button>
                  

                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  md:grid-cols-3 xmd:grid-cols-4 md:gap-8">
                    <AnimatePresence>
                        {visibleData.map((item) => (
                            <motion.div
                                key={item.id}
                                whileInView={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Link to={`/register`}>
                                    <div
                                        className="relative flex items-center justify-center h-40 p-6 text-center transition duration-300 transform bg-center bg-cover rounded-lg sm:p-8 sm:h-48 md:h-56 hover:scale-105 hover:shadow-lg border text-white"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-black-900 rounded-lg opacity-50">
                                           
                                        </div>
                                        <span className="relative text-lg font-semibold ">
                                            {item.title}
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
  )
}

export default CareerServices