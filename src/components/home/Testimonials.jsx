import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Software Engineer",
            company: "Tech Corp",
            quote: "The career guidance I received was instrumental in landing my dream job. The mentors are exceptional!",
            image: "path-to-image"
        },
        {
            name: "Michael Chen",
            role: "Data Scientist",
            company: "Analytics Pro",
            quote: "Their roadmap helped me transition into data science seamlessly. Highly recommended for career changers.",
            image: "path-to-image"
        },
        {
            name: "Emma Williams",
            role: "Product Manager",
            company: "Innovation Hub",
            quote: "The industry insights and networking opportunities were invaluable for my career growth.",
            image: "path-to-image"
        }
    ]

    return (
        <section className='w-full'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    {/* <span className='text-violet-600 font-semibold tracking-wide uppercase'>Testimonials</span> */}
                    {/* <h2 className='text-4xl md:text-5xl font-bold mt-4'>Success Stories</h2> */}
                </div>

                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                    {testimonials.map((item, index) => (
                        <div key={index} className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <FaQuoteLeft className='text-4xl text-violet-600 mb-6' />
                            <p className='text-gray-600 mb-6'>{item.quote}</p>
                            <div className='flex items-center gap-4'>
                                <div className='w-12 h-12 bg-violet-100 rounded-full'></div>
                                <div>
                                    <h4 className='font-semibold'>{item.name}</h4>
                                    <p className='text-sm text-gray-600'>{item.role} at {item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
