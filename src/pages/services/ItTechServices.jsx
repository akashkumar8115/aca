import React from 'react'
import { itBasedService } from '../../data/servicesData'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ItTechServices = () => {
    return (
        <section >
    

    
        {/* ----------- course ------- */}
    
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  xxl:gap-12 gap-8'>
            {
                itBasedService.map((course) => (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: course.id * 0.1 }}
                    key={course.id}
                >
                    <Link 
                      data-aos={course.id % 2 === 0 ? "fade-up" : "fade-down"}
                        to={"/register"}
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
                            <p className="text-black-600 mb-4 xs:text-base text-sm">{course.description.length > 100 ? course.description.substring(0,100) + "..." : course.description }</p>
    
                           
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
 
    
      </section>
      )
}

export default ItTechServices