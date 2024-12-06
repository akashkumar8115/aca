import React from 'react'

const news = [
    {
        date: "March 2024",
        title: "ACA Launches AI Career Advisor",
        description: "Revolutionary AI-powered career guidance platform"
    },
    {
        date: "February 2024",
        title: "500+ Companies Partnership Milestone",
        description: "Expanding opportunities for students"
    },
    {
        date: "January 2024",
        title: "New Office in Mumbai",
        description: "Expanding our presence in Western India"
    }
]

const NewsSection = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Latest Updates</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {news.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                        <p className="text-sm text-violet-50 mb-2">{item.date}</p>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-black-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsSection
