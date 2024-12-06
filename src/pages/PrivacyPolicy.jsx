import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5"
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Information We Collect",
            content: [
                "Personal Information (name, email, phone)",
                "Device Information (IP address, browser type)",
                "Usage Data (interactions with our services)",
                "Payment Information (when applicable)"
            ]
        },
        {
            title: "How We Use Your Information",
            content: [
                "Provide and maintain our services",
                "Notify you about changes to our services",
                "Provide customer support",
                "Monitor usage of our services"
            ]
        },
        {
            title: "Data Security",
            content: [
                "Encryption of sensitive data",
                "Regular security assessments",
                "Limited access to personal information",
                "Secure data storage systems"
            ]
        },
        {
            title: "Your Privacy Rights",
            content: [
                "Right to access your data",
                "Right to correct your data",
                "Right to delete your data",
                "Right to data portability"
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-violet-600 text-green-500 py-16 md:py-24"
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center mb-6">
                        <IoShieldCheckmarkOutline className="text-6xl" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-violet">
                        Your privacy is important to us. This policy outlines how we collect, 
                        use, and protect your personal information.
                    </p>
                </div>
            </motion.div>

            {/* Last Updated */}
            <div className="container mx-auto px-4 py-6">
                <p className="text-gray-600 text-center">
                    Last Updated: January 15, 2024
                </p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose max-w-none mb-12"
                    >
                        <p className="text-gray-700 leading-relaxed">
                            Admin Career Academy ("we," "our," or "us") is committed to protecting 
                            your privacy. This Privacy Policy explains how we collect, use, disclose, 
                            and safeguard your information when you visit our website or use our services.
                        </p>
                    </motion.div>

                    {/* Policy Sections */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                    {section.title}
                                </h2>
                                <ul className="space-y-4">
                                    {section.content.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-violet-600 rounded-full mt-2"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 bg-gray-50 rounded-xl p-6 md:p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-700">Email: privacy@admincareeracademy.com</p>
                            <p className="text-gray-700">Phone: +1 234 567 8900</p>
                            <p className="text-gray-700">Address: 123 Education Street, Knowledge City</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
