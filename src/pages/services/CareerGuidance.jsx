import React from 'react'

const CareerGuidance = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                {/* Career Path Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Engineering Paths</h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-violet-100 rounded-lg">
                                <h3 className="font-medium">Computer Science</h3>
                                <p className="text-sm text-black-600">Average Package: 8-12 LPA</p>
                            </div>
                            <div className="p-4 bg-violet-100 rounded-lg">
                                <h3 className="font-medium">Mechanical Engineering</h3>
                                <p className="text-sm text-black-600">Average Package: 6-10 LPA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerGuidance