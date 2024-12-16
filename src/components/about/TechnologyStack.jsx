import React from 'react'

const technologies = [
    {
        category: "Frontend Development",
        tools: ["React.js", "Next.js", "Tailwind CSS", "Material UI"]
    },
    {
        category: "Backend Development",
        tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"]
    },
    {
        category: "Cloud & DevOps",
        tools: ["AWS", "Docker", "Jenkins", "GitHub Actions"]
    },
    {
        category: "AI & Analytics",
        tools: ["TensorFlow", "Python", "Data Analytics", "Machine Learning"]
    }
]

const TechnologyStack = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Our Technology Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-violet-500">{tech.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {tech.tools.map((tool, idx) => (
                                <span 
                                    key={idx}
                                    className="bg-violet-100 text-black-800 px-3 py-1 rounded-full text-sm"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechnologyStack
