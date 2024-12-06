import React from 'react'
import { Link } from 'react-router-dom'

const Connect = () => {
    return (
        <section className="py-24 bg-black-200">

            <div data-aos="fade-left" className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:gap-y-16 gap-y-12 ">

                <div className="py-12 bg-green-100 rounded-xl shadow-lg text-center">
                    <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
                    <p className="text-black-600 mb-8 max-w-2xl mx-auto">
                        Ready to start your career journey? Our team is here to help you achieve your professional goals.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/contact-us"
                            className="bg-violet-700 text-white px-8 py-3 rounded-lg hover:bg-violet-800 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/services"
                            className="border-2 border-violet-700 bg-violet-700 text-violet-50 px-8 py-3 rounded-lg hover:bg-violet-800 hover:text-white transition-colors"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Connect