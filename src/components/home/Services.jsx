import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { servicesData } from '../../data/services'
import { careerPaths } from '../../data/careerPaths'
import { Link } from 'react-router-dom'
import "../../styles/services.css"

const Services = () => {
  const servicesRef = useRef(null)
  const careerRef = useRef(null)

  const scroll = (direction, ref) => {
    const container = ref.current
    const scrollAmount = 400
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className='w-full'>
      <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-32'>
        {/* Services Section */}
        <div>
          <div className='flex flex-col gap-y-4 items-center'>
            {/* <span className='text-violet-600 font-semibold tracking-wide uppercase'>Our Services</span> */}
            <h1 className='text-4xl md:text-5xl font-bold text-center'>Comprehensive Career Solutions</h1>
            <p className='text-gray-600 text-center max-w-2xl'>Empowering your professional journey with tailored services</p>
          </div>

          <div className='scroll-container relative w-[100%] mx-auto relative'>
            <button
              className='scroll-btn left bg-violet-600 z-5 absolute'
              onClick={() => scroll('left', servicesRef)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              ref={servicesRef}
              className='flex overflow-x-auto gap-8 scroll-smooth hide-scrollbar w-full'
            >
              {servicesData.map((service) => (
                <div key={service.id} className='flex-none w-[350px] service-card'>
                  <div className='h-48 overflow-hidden rounded-t-xl'>
                    <img src={service.image} alt={service.title} className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-500' />
                  </div>
                  <div className='p-6 bg-white rounded-b-xl'>
                    <h2 className='text-xl font-bold mb-3'>{service.title}</h2>
                    <p className='text-gray-600 mb-4'>{service.description}</p>
                    <Link to={service.path}>
                      <button className='w-full py-3 bg-green-600 text-black rounded-lg hover:bg-violet-700 transition-colors'>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <button
              className='scroll-btn right bg-violet-600 z-5 absolute'
              onClick={() => scroll('right', servicesRef)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Career Paths Section */}
        {/* <div>
          <div className='flex flex-col gap-y-4 items-center mb-16'>
            <span className='text-violet-600 font-semibold tracking-wide uppercase'>Career Paths</span>
            <h2 className='text-4xl md:text-5xl font-bold text-center'>Explore Your Future</h2>
            <p className='text-gray-600 text-center max-w-2xl'>Discover high-demand career opportunities</p>
          </div>

          <div className='scroll-container relative'>
            <button
              className='scroll-btn left bg-indigo-600'
              onClick={() => scroll('left', careerRef)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              ref={careerRef}
              className='flex overflow-x-auto gap-8 scroll-smooth hide-scrollbar'
            >
              {careerPaths.map((path) => (
                <div key={path.id} className='flex-none w-[400px] career-card'>
                  <div className='relative h-[300px] rounded-xl overflow-hidden group'>
                    <img
                      src={path.image}
                      alt={path.title}
                      className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end'>
                      <h3 className='text-2xl font-bold text-white mb-2'>{path.title}</h3>
                      <p className='text-gray-200 mb-4'>{path.description}</p>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {path.skills.map((skill, i) => (
                          <span key={i} className='px-3 py-1 bg-white/20 rounded-full text-sm text-white'>
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className='flex justify-between text-white text-sm'>
                        <span>Avg. Salary: {path.avgSalary}</span>
                        <span>Growth: {path.growthRate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className='scroll-btn right bg-indigo-600'
              onClick={() => scroll('right', careerRef)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Services
