import React from 'react'

const HostelRules = () => {
    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Timing Rules</h2>
                        <ul className="space-y-3 text-black-600">
                            <li>• Entry Time: 10:00 PM</li>
                            <li>• Breakfast: 7:00 AM - 9:00 AM</li>
                            <li>• Lunch: 12:30 PM - 2:30 PM</li>
                            <li>• Dinner: 7:30 PM - 9:30 PM</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">General Rules</h2>
                        <ul className="space-y-3 text-black-600">
                            <li>• No Smoking/Alcohol</li>
                            <li>• Visitors allowed in common area</li>
                            <li>• Keep rooms clean</li>
                            <li>• Maintain noise levels</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Security Measures</h2>
                        <ul className="space-y-3 text-black-600">
                            <li>• 24/7 Security Guards</li>
                            <li>• CCTV Surveillance</li>
                            <li>• Biometric Entry</li>
                            <li>• Emergency Helpline</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostelRules
