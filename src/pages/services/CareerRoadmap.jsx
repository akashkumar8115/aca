import React from 'react'
import { motion } from 'framer-motion'

const CareerRoadmap = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Short Term Goals (1-2 years)</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-violet-100 rounded-lg">
                                <h3 className="font-medium">Skill Development</h3>
                                <p className="text-sm text-black-600">Technical and soft skills training</p>
                            </div>
                            <div className="p-4 bg-violet-100 rounded-lg">
                                <h3 className="font-medium">Internships</h3>
                                <p className="text-sm text-black-600">Industry exposure and experience</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Long Term Goals (3-5 years)</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-violet-100 rounded-lg">
                                <h3 className="font-medium">Career Growth</h3>
                                <p className="text-sm text-black-600">Leadership positions and specialization</p>
                            </div>
                            <div className="p-4 bg-violet-100 rounded-lg">
                                <h3 className="font-medium">Higher Education</h3>
                                <p className="text-sm text-black-600">Masters and specialized certifications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerRoadmap
