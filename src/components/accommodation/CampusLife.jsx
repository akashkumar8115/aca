import React from 'react'
import { motion } from 'framer-motion'

const CampusLife = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Sports Facilities</h3>
                            <ul className="space-y-2 text-black-600">
                                <li>• Indoor Sports Complex</li>
                                <li>• Olympic Size Swimming Pool</li>
                                <li>• Cricket Ground</li>
                                <li>• Basketball Courts</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Cultural Activities</h3>
                            <ul className="space-y-2 text-black-600">
                                <li>• Annual Cultural Fest</li>
                                <li>• Music Club</li>
                                <li>• Dance Club</li>
                                <li>• Theatre Group</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampusLife
