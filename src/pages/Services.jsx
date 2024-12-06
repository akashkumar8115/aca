import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { serviceImages, servicesData } from '../data/services'
import ServiceCard from '../components/services/ServiceCard'
import FeaturedServices from '../components/services/FeaturedServices'
import ServiceProcess from '../components/services/ServiceProcess'
import TestimonialsSlider from '../components/services/TestimonialsSlider'
import ServiceStats from '../components/services/ServiceStats'
import FAQSection from '../components/services/FAQSection'
import CallToAction from '../components/services/CallToAction.jsx'
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServiceComparison from '../components/services/ServiceComparison';
const Services = () => {
    return (
        <div className="pt-22 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-16">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                    <p className="text-lg text-black-600 max-w-3xl mx-auto">
                        Comprehensive career development and educational support services
                        designed to transform your professional journey.
                    </p>
                </motion.div>

                {/* Main Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* Featured Services */}
                <FeaturedServices />

                {/* Service Process */}
                <ServiceProcess />

                {/* Statistics */}
                <ServiceStats />

                {/* Testimonials */}
                <TestimonialsSlider />

                {/* FAQ Section */}
                <FAQSection />

                {/* Call to Action */}

                {/* Service Comparison */}
                <ServiceComparison />

                {/* Service Features */}
                <ServiceFeatures />

                {/* Call to Action */}
                <CallToAction />


            </div>
        </div>
    )
}

export default Services
