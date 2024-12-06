import React from 'react'
import Hero from '../../assets/home/career-counselling.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className='w-full min-h-screen flex items-center pt-2 mb-16'>
      <div className='w-11/12 lg:w-10/12 mx-auto flex smd:flex-row flex-col justify-between items-center xmd:gap-x-16 gap-x-10 gap-y-16'>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} className='flex flex-col smd:gap-y-8 gap-y-6 smd:w-[55%]'>
          <h1 className='xl:text-4xl text-3xl smd:text-left text-center font-bold xl:leading-[70px] leading-[60px] text-gray-800'>
            Transform Your Future with Expert Guidance
          </h1>
          <h2 className='xl:text-3xl text-2xl smd:text-left text-center font-semibold text-green-600'>
            Your Success Journey Starts Here
          </h2>
          <p className='smd:text-left text-center text-lg text-gray-600 leading-relaxed'>
            We're dedicated to empowering students and professionals with cutting-edge career guidance, educational resources, and industry insights. Join thousands of successful individuals who've transformed their careers with our expert guidance.
          </p>
          <div className='flex gap-4 smd:justify-start justify-center'>
            <Link to="/register" className=''>
              <button className='py-4 px-8 text-lg text-white hover:text-black font-semibold transition-all duration-300 bg-violet-600 hover:bg-green-500 rounded-lg text-black shadow-lg hover:shadow-xl'>
                Start Your Journey
              </button>
            </Link>
            <Link to="/services" className=''>
              <button className='py-4 px-8 text-lg font-semibold transition-all duration-300 border-2 border-violet-600 hover:border-green-500 rounded-lg text-violet-600 hover:text-green-500 shadow-lg hover:shadow-xl'>
                Explore Services
              </button>
            </Link>
          </div>
          {/* Stats Section */}
          {/* <div className="bg-white/10 backdrop-blur-lg py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-4xl font-bold mb-2">10000+</div>
                  <div className="text-sm opacity-80">Students Guided</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-sm opacity-80">Partner Companies</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-80">Career Paths</div>
                </motion.div>
              </div>
            </div>
          </div> */}
        </motion.div>

        <div className='smd:w-[45%] relative'>
          <div className='absolute -z-10 w-full h-full bg-gradient-to-r from-violet-200 to-green-200 rounded-full blur-3xl opacity-30'></div>
          <img src={Hero} alt="Career Guidance" className='w-full h-full object-contain animate-float' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection