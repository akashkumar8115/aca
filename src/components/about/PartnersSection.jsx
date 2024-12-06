import React from 'react'

const partners = [
    {
        category: "Educational Partners",
        list: ["IIT Delhi", "NIT Hamirpur", "Panjab University", "Delhi University"]
    },
    {
        category: "Industry Partners",
        list: ["Tech Innovators", "Global Solutions", "Data Systems", "Future Corp"]
    },
    {
        category: "Training Partners",
        list: ["Skill Hub", "Learning Center", "Tech Academy", "Career Institute"]
    }
]

const PartnersSection = () => {
    return (
        <div className="py-12 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Partners</h2>
            <div className="grid md:grid-cols-3 gap-6 px-6">
                {partners.map((category, index) => (
                    <div key={index} className="text-center">
                        <h3 className="text-xl font-semibold mb-4 text-violet-50">{category.category}</h3>
                        <ul className="space-y-2">
                            {category.list.map((partner, idx) => (
                                <li key={idx} className="text-black-600">{partner}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PartnersSection
