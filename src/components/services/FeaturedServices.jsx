import React from 'react'

const featuredServices = [
    {
        title: "Career Counselling",
        description: "Expert guidance for choosing the right career path",
        features: [
            "Personality Assessment",
            "Skill Gap Analysis",
            "Industry Insights",
            "Career Roadmap Planning"
        ]
    },
    {
        title: "College Selection",
        description: "Find the perfect educational institution for your goals",
        features: [
            "College Rankings",
            "Course Comparisons",
            "Admission Guidance",
            "Scholarship Information"
        ]
    },
    {
        title: "Placement Support",
        description: "Comprehensive assistance for job placement",
        features: [
            "Resume Building",
            "Interview Preparation",
            "Company Connections",
            "Job Market Analysis"
        ]
    }
]

const FeaturedServices = () => {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-semibold text-center mb-12">Featured Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {featuredServices.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-black-600 mb-6">{service.description}</p>
                        <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-black-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedServices
