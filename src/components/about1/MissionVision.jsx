import React from 'react'
import { motion } from 'framer-motion'

const MissionVision = () => {
    return (
        <section className="py-24  bg-black-100 ">

            <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center "
                >
                    <h1 className="xmd:text-[42px] xs:text-4xl text-3xl font-semibold ">Mission & Vision</h1>

                </motion.div>

                <div data-aos="fade-right"  className="grid md:grid-cols-2 gap-8 ">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p className="text-black-600 mt-2">
                            Our mission is to
                            empower young talent
                            by providing real-world
                            skills, mentorship, and
                            opportunities for
                            workforce succes
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold">Our Vision</h2>
                        <p className="text-black-600 mt-2">
                            The vision of ACA Pvt.
                            Ltd. is to become a
                            leader in career
                            development, setting
                            new standards for job-
                            readiness and
                            professional growth.
                        </p>
                    </div>
                </div>



            </div>

        </section>
    )
}

export default MissionVision