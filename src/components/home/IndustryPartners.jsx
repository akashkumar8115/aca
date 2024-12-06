import React from 'react'
import { partners } from '../../data/partners'
import Marquee from 'react-fast-marquee'

const IndustryPartners = () => {
    return (
        <section className='py-20'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>Our Industry Partners</h2>
                    <p className='text-gray-600'>Collaborating with leading companies to create opportunities</p>
                </div>

                <Marquee gradient={true} speed={40}>
                    {partners.map((partner) => (
                        <div key={partner.id} className='mx-8'>
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className='h-16 grayscale hover:grayscale-0 transition-all duration-300'
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default IndustryPartners
