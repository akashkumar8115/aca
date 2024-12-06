import React from 'react'
import mission from '../../assets/home/mission.png'

const Mission = () => {
    return (
        <section className='w-full sm:py-24 py-16'>
            <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-16'>
                <div className='flex flex-col gap-y-4 items-center'>
                    <span className='text-violet-600 font-semibold tracking-wide uppercase'>Our Mission</span>
                    <h1 className='text-4xl md:text-5xl font-bold text-center'>Shaping Future Leaders</h1>
                </div>

                <div className='flex smd:flex-row flex-col items-center gap-x-12 gap-y-10'>
                    <div className='smd:w-1/2'>
                        <img src={mission} alt="Our Mission" className='w-full h-auto object-contain hover:scale-105 transition-transform duration-500' />
                    </div>

                    <div className='smd:w-1/2 flex flex-col gap-y-6'>
                        <h2 className='text-2xl font-semibold'>Empowering Through Education & Innovation</h2>
                        <p className='text-gray-600 leading-relaxed'>
                            We are dedicated to transforming careers through innovative guidance and cutting-edge solutions. Our commitment extends beyond traditional career counseling – we create pathways for sustainable professional growth and development.
                        </p>
                        <div className='grid grid-cols-2 gap-6 mt-4'>
                            <div className='flex flex-col gap-y-2'>
                                <span className='text-3xl font-bold text-violet-600'>98%</span>
                                <p className='text-gray-600'>Career Satisfaction</p>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <span className='text-3xl font-bold text-violet-600'>10K+</span>
                                <p className='text-gray-600'>Success Stories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission
