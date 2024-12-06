import React from 'react'
import FounderImg from '../../assets/abouts/Shadab.jpg'
const Founder = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative lg:row-start-1 lg:col-start-2 justify-center" data-aos="fade-right">
                        <img
                            className="w-50 h-50 rounded-xl m-auto"
                            src={FounderImg}  // Add your founder's image here
                            alt="ACA Founder"
                        />
                    </div>
                    <div className="mt-10 lg:mt-0" data-aos="fade-left">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Meet Our Founder
                        </h2>
                        <h3 className="mt-2 text-xl font-semibold text-blue-600">
                            Mohd Shadab Ansari
                        </h3>
                        <p className="mt-3 text-lg text-gray-500">
                            With over 5 years of experience in education and career guidance, our founder established Admin Career Academy with a vision to transform career counseling and professional development.
                        </p>
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold text-gray-900">Key Achievements:</h4>
                            <ul className="mt-4 space-y-4">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-blue-500">✓</span>
                                    <p className="ml-3 text-base text-gray-500">
                                        Guided 10,000+ students toward successful careers
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-blue-500">✓</span>
                                    <p className="ml-3 text-base text-gray-500">
                                        Established partnerships with 20+ leading companies
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-blue-500">✓</span>
                                    <p className="ml-3 text-base text-gray-500">
                                        Developed innovative career guidance methodologies
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founder
