import React from 'react'

const teamMembers = [
    {
        name: "Mohd Shadab Qusari",
        role: "Founder & CEO",
        education: "Electronics Engineering, Panjab University",
        expertise: ["Leadership", "Strategy", "Innovation"]
    },
    {
        name: "Manish Yadav",
        role: "Co-founder & CTO",
        education: "Electronics Engineering",
        expertise: ["Technical Architecture", "Platform Development"]
    },
    {
        name: "Asfaq Srivastava",
        role: "Co-founder & COO",
        education: "Electronics Engineering",
        expertise: ["Operations", "Analytics", "Resource Optimization"]
    },
    {
        name: "Akash Kumar",
        role: "Technical Lead",
        education: "Electronics Engineering, NIT Hamirpur",
        expertise: ["Full Stack Development", "Digital Solutions"]
    }
]

const TeamGallery = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                            <p className="text-violet-500 font-medium mb-3">{member.role}</p>
                            <p className="text-sm text-black-600 mb-4">{member.education}</p>
                            <div className="flex flex-wrap gap-2">
                                {member.expertise.map((skill, idx) => (
                                    <span 
                                        key={idx}
                                        className="bg-violet-100 text-black-800 px-2 py-1 rounded-full text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamGallery
