import React from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <section className="py-24  bg-black-100 ">

            <div data-aos="fade-left" className="w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-12">

                <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
                    <p className="mb-6 text-black-600">
                        Be part of our mission to transform career development in India
                    </p>
                    <Link
                        to="/contact-us"
                        className="inline-block bg-violet-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>





            </div>

        </section>
    )
}

export default Join