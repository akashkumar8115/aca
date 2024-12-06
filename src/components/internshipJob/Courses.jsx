import React from 'react'
import { useLocation } from 'react-router-dom'
import { internshipBasedData } from '../../data/intern-job';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Courses = () => {

    const location = useLocation();

    const pathname = location.pathname.split("/");
    const type = pathname[pathname.length - 1].split("-").join(" ");

    const data = internshipBasedData.filter((item) => item.type.toLowerCase() === type);

    console.log(data)



    return (
        <section className=' xmd:mt-24 mt-16 py-24'>

            {/* --------- container --------- */}

            <div className='w-10/12 mx-auto  flex flex-col gap-y-12'>

                {/* --------- header ----- */}

                <h1 className='font-semibold xs:text-3xl text-2xl'>{data[0].title}</h1>

                {/* ----------- course ------- */}

                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  xxl:gap-12 gap-8'>
                    {
                        data[0].courses.map((course) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: course.id * 0.1 }}
                                key={course.id}
                            >
                                <Link
                                    to={"https://docs.google.com/forms/d/e/1FAIpQLSdCC8cTzO5YZOkH89hKTmRRxyEn05SMuVNE2KKeD5oL7P3diQ/viewform?usp=sf_link"}
                                    className="group block xl:h-[420px] xlg:h-[440px]  h-[420px] md:w-full  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.courseName}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                                    </div>

                                    <div className="p-6">
                                        <h2 className="xmd:text-xl text-lg font-semibold mb-3 group-hover:text-violet-50">
                                            {course.courseName}
                                        </h2>
                                        <p className="text-black-600 mb-4 xs:text-base text-sm">{course.description.length > 100 ? course.description.substring(0, 100) + "..." : course.description}</p>


                                        {
                                            type.toLowerCase() === "paid" && (
                                                <p className='mb-2'>
                                                    {`Rs. ${course.price} /-`}
                                                </p>
                                            )
                                        }

                                        <div className="flex items-center text-violet-50">
                                            <span>Learn More</span>
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))
                    }

                </div>


            </div>

        </section>
    )
}

export default Courses