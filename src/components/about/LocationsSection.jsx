import React from 'react'

const locations = [
    {
        city: "Chandigarh",
        address: "Sector 17, Near PU Campus",
        contact: "+91 98765 43210"
    },
    {
        city: "Delhi",
        address: "Connaught Place, Central Delhi",
        contact: "+91 98765 43211"
    },
    {
        city: "Mumbai",
        address: "Andheri East, Mumbai",
        contact: "+91 98765 43212"
    }
]

const LocationsSection = () => {
    return (
        <div className="py-12 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Locations</h2>
            <div className="grid md:grid-cols-3 gap-6 px-6">
                {locations.map((location, index) => (
                    <div key={index} className="text-center p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">{location.city}</h3>
                        <p className="text-black-600 mb-2">{location.address}</p>
                        <p className="text-violet-50">{location.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LocationsSection
