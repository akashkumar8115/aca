import React from 'react'
import { motion } from 'framer-motion'

const AdmissionProcess = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-6">Admission Steps</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-4 bg-violet-100 rounded-lg">
                            <h3 className="font-medium mb-2">1. Application</h3>
                            <p className="text-sm text-black-600">Complete online application form</p>
                        </div>
                        <div className="p-4 bg-violet-100 rounded-lg">
                            <h3 className="font-medium mb-2">2. Document Verification</h3>
                            <p className="text-sm text-black-600">Submit required documents</p>
                        </div>
                        <div className="p-4 bg-violet-100 rounded-lg">
                            <h3 className="font-medium mb-2">3. Counselling</h3>
                            <p className="text-sm text-black-600">Attend counselling session</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdmissionProcess
