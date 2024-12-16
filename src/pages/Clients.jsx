import React from 'react'
import { motion } from 'framer-motion'
import ClientBanner from '../assets/clients/client-banner.jpg'
import Client1 from '../assets/clients/client1.jpg'
import Client2 from '../assets/clients/client2.jpg'
import Client3 from '../assets/clients/client3.jpg'
import Client4 from '../assets/clients/client3.jpg'
const Clients = () => {
    const testimonials = [
        {
            name: "Tech Solutions Inc",
            industry: "IT Services",
            logo: Client1,
            testimonial: "Admin Career Academy helped us find the perfect talent for our team. Their career counseling services have been instrumental in building our workforce.",
            rating: 5,
            position: "CEO"
        },
        {
            name: "Digital Innovators",
            industry: "Digital Marketing",
            logo: Client2,
            testimonial: "The web development and digital marketing services provided by Admin Career Academy transformed our online presence completely.",
            rating: 5,
            position: "Marketing Director"
        },
        {
            name: "Creative Studios",
            industry: "Design Agency",
            logo: Client3,
            testimonial: "Outstanding graphic design work and content writing services. They truly understand our brand vision.",
            rating: 5,
            position: "Creative Head"
        }
    ]

    const stats = [
        { number: "200+", label: "Happy Clients" },
        { number: "95%", label: "Client Retention" },
        { number: "500+", label: "Projects Completed" },
        { number: "50+", label: "Industry Awards" }
    ]

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-200 mt-18 pb-12">
            {/* Hero Section */}
            <div className="relative h-[800px] mb-12">
                <img
                    src={ClientBanner}
                    alt="Our Clients"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white text-center"
                    >
                        Our Success Stories
                    </motion.h1>
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-11/12 lg:w-10/12 mx-auto mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-violet-500 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-black-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-11/12 lg:w-10/12 mx-auto mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.logo}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-black-600 text-sm">{testimonial.industry}</p>
                                </div>
                            </div>
                            <p className="text-black-600 mb-4">{testimonial.testimonial}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-black-600 text-sm">{testimonial.position}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-11/12 lg:w-10/12 mx-auto pb-16">
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
                    <p className="text-black-600 mb-6">Let's discuss how we can help your business grow</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-violet-500 text-white px-8 py-3 rounded-lg hover:bg-violet-100 transition-colors"
                    >
                        Contact Us Today
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Clients