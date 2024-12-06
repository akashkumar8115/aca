import React from 'react'
import founderImage from '../../assets/abouts/Shadab.jpg'

const FounderProfile = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/3">
                    <img 
                        src={founderImage} 
                        alt="Mohd Shadab Qusari" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-8 md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">Mohd Shadab Qusari</h2>
                    <h3 className="text-violet-50 font-medium mb-4">Founder & CEO</h3>
                    <div className="space-y-4 text-black-600">
                        <p>
                            A visionary entrepreneur and Electronics Engineer from Panjab University, Chandigarh. Shadab's journey from a rural background to founding ACA Pvt. Ltd. exemplifies his commitment to transforming career development in India.
                        </p>
                        <p>
                            His experience in identifying the gap between academic curriculum and industry requirements led to the creation of a platform that makes high-quality career resources accessible to all.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderProfile
