import React from 'react'
import company from '../../assets/abouts/company.jpg'
import { motion } from 'framer-motion'

const Company = () => {
    return (
        <section className="pt-24 pb-16 xlg:mt-28 mt-16  ">

            <div className="w-11/12 lg:w-10/12 mx-auto  flex flex-col gap-y-8 ">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center "
                >
                    <h1 className="xmd:text-[42px] xs:text-4xl text-3xl font-semibold ">About ACA Pvt. Ltd.</h1>

                </motion.div>

                <div className='flex xmd:flex-row flex-col  xlg:gap-x-16 gap-x-10 xs:gap-y-16 gap-y-12 xmd:gap-y-0 xs:py-6'>

                    {/* --------------- left side ------------- */}

                    <div data-aos="fade-right" className='xlg:w-[55%] xmd:w-[50%] flex flex-col gap-y-6 justify-center'>

                        <h2 className='smd:text-3xl text-2xl xmd:text-left text-center font-semibold  text-green-600'>WHERE LEARNING MEETS
                            REAL-WORLD IMPACT!</h2>

                        <p className="xmd:text-lg text-base text-black-600  text-justify">
                            ACA Pvt. Ltd., founded in 2021, is a forward-
                            thinking organization committed to
                            empowering students, professionals, and
                            educators through innovative career
                            development solutions. By bridging the gap
                            between academic learning and real-world
                            applications, ACA Pvt. Ltd. transforms careers
                            with impactful internships, job placements, and
                            personalized guidance.
                        </p>

                    </div>

                    {/* -------------- right side ------------------ */}

                    <div data-aos="fade-left" className='xlg:w-[40%] xmd:w-[46%] flex items-center justify-center'>

                        <img src={company} alt="company" className='xmd:w-full xmd:h-full xs:w-[80%] xs:h-[80%] object-cover' />

                    </div>


                </div>



            </div>

        </section>
    )
}

export default Company