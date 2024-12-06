import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { achievementData } from '../../data/achievementsData';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';


// const achievement = [
//     "Meetup with sachdeva stocks owner Mr. Paramjeet sachdeva Sir whose company's listed in India's top 10 stocks ",
//     "Meetup with Ex AICTE VICE CHAIRMAN Mr Dr. M.P.  Poonia Sir ",
//     "Meetup with Spenny founder Mr Rathan Shah whose company valuation 100cr",
//     "Meetup with Hood app founder Mr Jasveer Singh  whose company valuation 600cr",
//     "Meet up with BNA President Mr Anoop Maurya ",
//     "Meet up with Cabinet Minister of Tripura Shri Shukla Charan Nautiyal sir",

// ]

const FounderAchievements = () => {
    return (
        <section className="pb-16  bg-violet-100">

            <div className="w-11/12 lg:w-10/12 mx-auto bg-white py-12 rounded-lg px-8">
                <h2 className="text-2xl font-semibold mb-8 text-center">Founder's Achievements</h2>

                <div className=''>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        loop
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{

                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },

                        }}
                        modules={[Autoplay]}

                        className="mySwiper "
                    >
                        {achievementData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <motion.div
                                    className=" relative group"
                                >

                                    <img src={item.image} alt="achievements" />

                                    <motion.div
                                          initial={{ opacity: 0  }}  // Initially, the text will be invisible
                                          whileHover={{ opacity: 1 }}  // Reveal the text on hover
                                          transition={{ duration: 0.3 }}  // Smooth transition for opacity

                                        className="absolute inset-0 flex justify-center items-center p-4 bg-black-900 bg-opacity-80">

                                        <p className="text-white text-sm font-semibold">{item.desc}</p>

                                    </motion.div>

                                </motion.div>
                            </SwiperSlide>
                        ))}

                    </Swiper>




                </div>

            </div>
        </section>
    )
}

export default FounderAchievements