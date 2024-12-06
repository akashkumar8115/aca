import React from 'react'
// import { IoMdCookie } from 'react-icons/io';
// import { FaCookieBite } from 'react-icons/fa'; 

import { motion } from 'framer-motion'

const CookiePolicy = () => {
    const cookieTypes = [
        {
            title: "Essential Cookies",
            description: "Required for basic site functionality",
            examples: [
                "Authentication and security",
                "Shopping cart functionality",
                "Site navigation preferences",
                "Basic form submissions"
            ]
        },
        {
            title: "Analytics Cookies",
            description: "Help us understand how visitors interact with our website",
            examples: [
                "Page view statistics",
                "Traffic source tracking",
                "User behavior analysis",
                "Performance monitoring"
            ]
        },
        {
            title: "Functional Cookies",
            description: "Enable enhanced functionality and personalization",
            examples: [
                "Language preferences",
                "Location-based content",
                "Personalized recommendations",
                "Saved user settings"
            ]
        },
        {
            title: "Marketing Cookies",
            description: "Track visitors across websites for marketing purposes",
            examples: [
                "Targeted advertisements",
                "Social media integration",
                "Campaign effectiveness",
                "User interest tracking"
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
                    {/* <IoMdCookie size={30} color="black" /> <FaCookieBite size={30} color="brown" /> */}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                        Cookie Policy
                    </h1>
                    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-violet-100">
                        Understanding how we use cookies to improve your experience
                    </p>
                </div>
            </motion.div>

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
                            This Cookie Policy explains how Admin Career Academy uses cookies and similar technologies 
                            to recognize you when you visit our website. It explains what these technologies are and 
                            why we use them, as well as your rights to control our use of them.
                        </p>
                    </motion.div>

                    {/* Cookie Types */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cookieTypes.map((type, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                            >
                                <h2 className="text-xl font-bold text-gray-800 mb-3">
                                    {type.title}
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {type.description}
                                </p>
                                <ul className="space-y-2">
                                    {type.examples.map((example, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700">
                                            <span className="w-2 h-2 bg-violet-600 rounded-full mt-2"></span>
                                            {example}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Managing Cookies Section */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 bg-gray-50 rounded-xl p-6 md:p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Managing Your Cookie Preferences
                        </h2>
                        <p className="text-gray-700 mb-4">
                            You can manage your cookie preferences through your browser settings. 
                            Please note that disabling certain cookies may impact the functionality of our website.
                        </p>
                        <div className="space-y-4">
                            <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors">
                                Update Cookie Preferences
                            </button>
                            <p className="text-sm text-gray-600">
                                Last updated: January 15, 2024
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default CookiePolicy
