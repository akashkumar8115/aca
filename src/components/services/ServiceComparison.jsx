import React from 'react'

const comparisonData = [
    {
        feature: "Career Assessment",
        basic: "✓",
        pro: "✓",
        premium: "✓"
    },
    {
        feature: "One-on-One Counseling",
        basic: "1 Session",
        pro: "3 Sessions",
        premium: "Unlimited"
    },
    {
        feature: "Resume Building",
        basic: "✕",
        pro: "✓",
        premium: "✓"
    },
    {
        feature: "Interview Preparation",
        basic: "✕",
        pro: "✓",
        premium: "✓"
    },
    {
        feature: "Placement Assistance",
        basic: "✕",
        pro: "Basic",
        premium: "Priority"
    },
    {
        feature: "Industry Connections",
        basic: "✕",
        pro: "Limited",
        premium: "Full Access"
    }
]

const ServiceComparison = () => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                    <tr className="bg-violet-500 text-white">
                        <th className="p-4 text-left">Features</th>
                        <th className="p-4 text-center">Basic</th>
                        <th className="p-4 text-center">Professional</th>
                        <th className="p-4 text-center">Premium</th>
                    </tr>
                </thead>
                <tbody>
                    {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="p-4 font-medium">{row.feature}</td>
                            <td className="p-4 text-center">{row.basic}</td>
                            <td className="p-4 text-center">{row.pro}</td>
                            <td className="p-4 text-center">{row.premium}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ServiceComparison
