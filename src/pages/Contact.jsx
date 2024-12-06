import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoLocationSharp, IoMail, IoCall, IoTime } from 'react-icons/io5'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            formData,
            'YOUR_PUBLIC_KEY'
        )
            .then((response) => {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                })
            })
            .catch((err) => {
                setSubmitStatus('error')
            })
            .finally(() => {
                setIsSubmitting(false)
                setTimeout(() => setSubmitStatus(null), 5000)
            })
    }

    const contactInfo = [
        {
            icon: <IoLocationSharp className="text-2xl" />,
            title: "Visit Us",
            details: [
                "ACA Pvt. Ltd.",
                "ALIGANJ SECTOR (K),126024",
                "LUCKNOW, UTTAR PRADESH, India"
            ]
        },
        {
            icon: <IoMail className="text-2xl" />,
            title: "Email Us",
            details: [
                "Infoonaca@gmail.com",
                "acapvtltd.in@gmail.com",
                "acahiring24@gmail.com"
            ]
        },
        {
            icon: <IoCall className="text-2xl" />,
            title: "Call Us",
            details: [
                "+91 9120325950",
                "+91 98765*****",
                // "Toll Free: 1800 123 4567"
            ]
        },
        {
            icon: <IoTime className="text-2xl" />,
            title: "Working Hours",
            details: [
                "Monday - Friday: 9:00 AM - 6:00 PM",
                "Saturday: 9:00 AM - 2:00 PM",
                "Sunday: Closed"
            ]
        }
    ]

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28">
            <div className="w-11/12 lg:w-10/12 mx-auto pb-16">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-black-600 max-w-2xl mx-auto">
                        Have questions about our services? We're here to help you navigate your career journey.
                    </p>
                </motion.div>

                {/* Contact Information Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <div className="text-violet-50 mb-4">{info.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                            <ul className="space-y-2">
                                {info.details.map((detail, idx) => (
                                    <li key={idx} className="text-black-600">{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-medium">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                        required
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                        required
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-medium">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                        placeholder="Your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium">Subject</label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                        required
                                        placeholder="Message subject"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows="5"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-50"
                                    required
                                    placeholder="Your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-violet-50 text-white py-3 rounded-lg font-semibold
                                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-violet-100'}
                                    transition-colors`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="text-green-600 text-center">
                                    Message sent successfully!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="text-red-600 text-center">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <iframe
                        title="ACA Location"
                        src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl shadow-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact