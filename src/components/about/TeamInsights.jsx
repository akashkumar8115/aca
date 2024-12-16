import React from 'react'

const teamMembers = [
    {
        name: "Mohd Shadab Qusari",
        role: "Founder & CEO",
        achievements: [
            "Electronics Engineering Graduate",
            "JEE Mains Success Story",
            "Visionary Leader"
        ],
        expertise: ["Strategic Planning", "Team Leadership", "Innovation Management"],
        quote: "Empowering students to achieve their career dreams through guidance and opportunities."
    },
    {
        name: "Manish Yadav",
        role: "Co-founder & CTO",
        achievements: [
            "Technical Architecture Expert",
            "Platform Development Lead",
            "Innovation Specialist"
        ],
        expertise: ["System Architecture", "Technical Leadership", "Product Development"],
        quote: "Building robust solutions that scale with student needs."
    },
    {
        name: "Asfaq Srivastava",
        role: "Co-founder & COO",
        achievements: [
            "Operations Excellence",
            "Resource Optimization",
            "Process Innovation"
        ],
        expertise: ["Operations Management", "Analytics", "Strategy Implementation"],
        quote: "Optimizing processes to deliver maximum value to our students."
    },
    {
        name: "Akash Kumar",
        role: "Technical Lead",
        achievements: [
            "Full Stack Development",
            "NIT Hamirpur Graduate",
            "Digital Solutions Expert"
        ],
        expertise: ["Web Development", "System Integration", "Technical Architecture"],
        quote: "Creating seamless digital experiences for career growth."
    }
]

const TeamInsights = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Team Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-violet-500">{member.role}</p>
                        </div>
                        
                        <div className="mb-4">
                            <h4 className="font-medium mb-2">Key Achievements</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                {member.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-black-600">{achievement}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-medium mb-2">Areas of Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                                {member.expertise.map((skill, idx) => (
                                    <span 
                                        key={idx}
                                        className="bg-violet-100 text-black-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <blockquote className="italic text-black-600 border-l-4 border-violet-500 pl-4 mt-4">
                            "{member.quote}"
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamInsights
