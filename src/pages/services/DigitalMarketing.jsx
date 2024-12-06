// import React from 'react'

// const DigitalMarketing = () => {
//     return (
//         <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-200">
//             <div className="w-11/12 lg:w-10/12 mx-auto">
//                 <h1 className="text-4xl font-bold text-center mb-8">Digital Marketing Solutions</h1>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h2 className="text-2xl font-semibold mb-4">Social Media Marketing</h2>
//                         <ul className="space-y-2 text-black-600">
//                             <li>• Strategy Development</li>
//                             <li>• Content Calendar Planning</li>
//                             <li>• Community Management</li>
//                             <li>• Analytics & Reporting</li>
//                             <li>• Paid Advertising</li>
//                         </ul>
//                     </div>

//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h2 className="text-2xl font-semibold mb-4">Email Marketing</h2>
//                         <ul className="space-y-2 text-black-600">
//                             <li>• Campaign Strategy</li>
//                             <li>• Newsletter Design</li>
//                             <li>• Automation Setup</li>
//                             <li>• A/B Testing</li>
//                             <li>• Performance Analysis</li>
//                         </ul>
//                     </div>

//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <h2 className="text-2xl font-semibold mb-4">PPC Advertising</h2>
//                         <ul className="space-y-2 text-black-600">
//                             <li>• Google Ads Management</li>
//                             <li>• Facebook Ads</li>
//                             <li>• Campaign Optimization</li>
//                             <li>• ROI Tracking</li>
//                             <li>• Conversion Analysis</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DigitalMarketing

// new

import React from 'react'
import { motion } from 'framer-motion'
import digitalMarketingImg from '../../assets/services/digital-marketing.jpg'

const DigitalMarketing = () => {
    const services = [
        {
            title: "Social Media Marketing",
            description: "Strategic social media campaigns across all major platforms",
            icon: "🚀"
        },
        {
            title: "Email Marketing",
            description: "Targeted email campaigns with high conversion rates",
            icon: "📧"
        },
        {
            title: "Content Marketing",
            description: "Engaging content that drives traffic and conversions",
            icon: "📝"
        },
        {
            title: "PPC Advertising",
            description: "Results-driven paid advertising campaigns",
            icon: "💰"
        }
    ]

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-200 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
                    <img
                        src={digitalMarketingImg}
                        alt="Digital Marketing"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold text-white"
                        >
                            Digital Marketing Services
                        </motion.h1>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-black-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Marketing Stats Section */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Our Impact</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-violet-50 mb-2">500+</div>
                            <div className="text-black-600">Successful Campaigns</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-violet-50 mb-2">2M+</div>
                            <div className="text-black-600">Leads Generated</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-violet-50 mb-2">98%</div>
                            <div className="text-black-600">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-violet-50 mb-2">150%</div>
                            <div className="text-black-600">Average ROI</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketing

