import React from 'react'
import { motion } from 'framer-motion'
import CounsellingImg from '../../assets/services/career-counselling.jpg'

const CareerCounselling = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
                    <img 
                        src={CounsellingImg} 
                        alt="Career Counselling"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold text-black"
                        >
                            Career Counselling Services
                        </motion.h1>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">One-on-One Guidance</h2>
                        <ul className="space-y-3 text-black-600">
                            <li>• Personalized career path assessment</li>
                            <li>• Skill gap analysis</li>
                            <li>• Industry-specific guidance</li>
                            <li>• Resume building workshops</li>
                            <li>• Interview preparation</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Career Development Programs</h2>
                        <ul className="space-y-3 text-black-600">
                            <li>• Personality assessment tests</li>
                            <li>• Career mapping sessions</li>
                            <li>• Industry expert mentoring</li>
                            <li>• Soft skills development</li>
                            <li>• Professional networking guidance</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center">
                    <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
                    <p className="mb-6 text-black-600">Book a consultation with our career experts today</p>
                    <button className="bg-violet-50 text-white px-8 py-3 rounded-lg hover:bg-violet-100 transition-colors">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CareerCounselling