import React from 'react'
import { FaGavel } from "react-icons/fa"
import { motion } from 'framer-motion'

const TermsOfService = () => {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: [
                "By accessing our services, you agree to these terms",
                "Terms may be updated without notice",
                "Continued use constitutes acceptance of changes",
                "Users must be at least 18 years old"
            ]
        },
        {
            title: "2. User Responsibilities",
            content: [
                "Provide accurate registration information",
                "Maintain security of account credentials",
                "Comply with all applicable laws and regulations",
                "Report unauthorized account access"
            ]
        },
        {
            title: "3. Service Usage",
            content: [
                "Services provided 'as-is' without warranties",
                "We reserve right to modify or terminate services",
                "Account termination for violation of terms",
                "Usage limitations and fair use policies"
            ]
        },
        {
            title: "4. Intellectual Property",
            content: [
                "All content remains property of Admin Career Academy",
                "Limited license for personal, non-commercial use",
                "Prohibition of unauthorized reproduction",
                "Respect for third-party intellectual property"
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-violet-600 text-black py-16 md:py-24"
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center mb-6">
                        <FaGavel className="text-6xl" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-violet-100">
                        Please read these terms carefully before using our services
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
                            Welcome to Admin Career Academy. These Terms of Service govern your use of our website,
                            services, and products. By accessing or using our services, you agree to be bound by
                            these terms.
                        </p>
                    </motion.div>

                    {/* Terms Sections */}
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
                            Questions About Our Terms?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions about these Terms of Service, please contact our legal team:
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-700">Email: legal@admincareeracademy.com</p>
                            <p className="text-gray-700">Phone: +1 234 567 8900</p>
                            <p className="text-gray-700">Address: 123 Education Street, Knowledge City</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfService
