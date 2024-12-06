import React from 'react'
import { upcomingEvents } from '../../data/events.js'

const UpcomingEvents = () => {
    return (
        <section className='py-20'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>Upcoming Events</h2>
                    <p className='text-gray-600'>Join our exclusive career development events</p>
                </div>

                <div className='space-y-8'>
                    {upcomingEvents.map((event) => (
                        <div key={event.id} className='flex flex-col md:flex-row gap-8 items-center bg-white rounded-xl shadow-lg p-6'>
                            <div className='w-full md:w-1/4 aspect-video rounded-lg bg-violet-100 flex items-center justify-center'>
                                <div className='text-center'>
                                    <div className='w-100'>
                                        <img src={event.image} alt="image" />
                                    </div>
                                    <div className='text-3xl font-bold text-violet-600'>{event.date}</div>
                                    <div className='text-gray-600'>{event.month}</div>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-xl font-bold mb-2'>{event.title}</h3>
                                <p className='text-gray-600 mb-4'>{event.description}</p>
                                <div className='flex items-center gap-4'>
                                    <span className='text-violet-600'>{event.time}</span>
                                    <span className='text-gray-500'>|</span>
                                    <span className='text-gray-600'>{event.location}</span>
                                </div>
                            </div>
                            <button className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors' >
                                Register Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UpcomingEvents
