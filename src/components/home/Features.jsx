import React from 'react'
import { FaRocket, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa'

const Features = () => {
    const features = [
        {
            icon: <FaRocket />,
            title: "Career Acceleration",
            description: "Fast-track your professional growth with personalized career strategies and industry insights"
        },
        {
            icon: <FaChartLine />,
            title: "Skill Development",
            description: "Access cutting-edge training programs aligned with industry demands"
        },
        {
            icon: <FaHandshake />,
            title: "Industry Networking",
            description: "Connect with industry leaders and build valuable professional relationships"
        },
        {
            icon: <FaLightbulb />,
            title: "Innovation Focus",
            description: "Stay ahead with latest industry trends and technological advancements"
        }
    ]

    return (
        <section className='w-full sm:py-24 py-16'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    <span className='text-violet-600 font-semibold tracking-wide uppercase'>Why Choose Us</span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4'>Features That Set Us Apart</h2>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {features.map((feature, index) => (
                        <div key={index} className='p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group'>
                            <div className='text-4xl text-violet-600 mb-6 group-hover:scale-110 transition-transform duration-300'>
                                {feature.icon}
                            </div>
                            <h3 className='text-xl font-bold mb-4'>{feature.title}</h3>
                            <p className='text-gray-600'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
