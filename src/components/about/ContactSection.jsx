import React from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
    return (
        <div className="py-12 bg-white rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
            <p className="text-black-600 mb-8 max-w-2xl mx-auto">
                Ready to start your career journey? Our team is here to help you achieve your professional goals.
            </p>
            <div className="flex justify-center gap-4">
                <Link 
                    to="/contact-us" 
                    className="bg-violet-500 text-white px-8 py-3 rounded-lg hover:bg-green-500 transition-colors"
                >
                    Contact Us
                </Link>
                <Link 
                    to="/services" 
                    className="border-2 border-violet-500 text-violet-500 px-8 py-3 rounded-lg hover:bg-violet-500 hover:text-white transition-colors"
                >
                    Our Services
                </Link>
            </div>
        </div>
    )
}

export default ContactSection
