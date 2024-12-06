import React, { useState } from 'react'
import { motion } from 'framer-motion'

const companies = [
    {
        id: 1,
        name: 'Tech Solutions Inc',
        industry: 'Technology',
        positions: ['Software Engineer', 'Product Manager', 'UX Designer'],
        description: 'Leading technology solutions provider',
        logo: '/images/company1.png'
    },
    {
        id: 2,
        name: 'Global Finance Corp',
        industry: 'Finance',
        positions: ['Financial Analyst', 'Risk Manager', 'Investment Associate'],
        description: 'International financial services firm',
        logo: '/images/company2.png'
    }
]

const VirtualCareerFair = () => {
    const [selectedCompany, setSelectedCompany] = useState(null)

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Virtual Career Fair
                </motion.h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companies.map((company) => (
                        <motion.div
                            key={company.id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
                            onClick={() => setSelectedCompany(company)}
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="w-24 h-24 mx-auto mb-4 object-contain"
                            />
                            <h2 className="text-xl font-bold text-center mb-2">{company.name}</h2>
                            <p className="text-gray-600 text-center mb-4">{company.industry}</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {company.positions.map((position, index) => (
                                    <span
                                        key={index}
                                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {position}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Company Modal */}
                {selectedCompany && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-xl p-8 max-w-2xl w-full">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">{selectedCompany.name}</h2>
                                <button
                                    onClick={() => setSelectedCompany(null)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <p className="text-gray-600 mb-6">{selectedCompany.description}</p>
                            <h3 className="font-semibold mb-4">Open Positions:</h3>
                            <ul className="space-y-2">
                                {selectedCompany.positions.map((position, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="mr-2">•</span>
                                        {position}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
                            >
                                Apply Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default VirtualCareerFair
