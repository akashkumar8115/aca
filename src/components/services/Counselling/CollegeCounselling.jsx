
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { counsellingData } from '../../../data/counselling';



const CollegeCounselling = () => {
    const [showAll, setShowAll] = useState(false);

    // Display only the first 6 cards initially, or all if `showAll` is true
    const visibleData = showAll ? counsellingData : counsellingData.slice(0, 4);

    return (

        <section>
            <div className="md:p-8 flex flex-col gap-y-12">

                <div className='flex justify-between items-center '>
                    <h2 className=" md:text-3xl sm:text-2xl text-xl font-semibold ">College Counselling</h2>


                    <motion.button
                        onClick={() => setShowAll(!showAll)}
                        className=" py-2  transition bg-blue-500 rounded-lg text-white shadow-md px-4 md:py-3 bg-green-500 hover:bg-violet-500 focus:outline-none "

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
                                <span className="relative text-lg font-semibold text-black">
                                    {/* {item.title} */}
                                </span>
                                <Link to={`https://docs.google.com/forms/d/e/1FAIpQLSdCC8cTzO5YZOkH89hKTmRRxyEn05SMuVNE2KKeD5oL7P3diQ/viewform?usp=sf_link`}>
                                    <div
                                        className="relative flex items-center justify-center h-40 p-6 text-center transition duration-300 transform bg-center bg-cover rounded-lg sm:p-8 sm:h-48 md:h-56 hover:scale-105 hover:shadow-lg border text-white"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-black-100 rounded-lg opacity-50">
                                            <h2 className="relative text-lg font-semibold text-white bg-black rounded-lg p-2">
                                                {item.title}
                                            </h2>
                                        </div>
                                    </div>
                                </Link>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default CollegeCounselling;