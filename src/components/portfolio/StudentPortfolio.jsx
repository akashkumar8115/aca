import React from 'react'
import { motion } from 'framer-motion'

const StudentPortfolio = () => {
    const portfolioData = {
        profile: {
            name: 'John Doe',
            title: 'Aspiring Software Developer',
            bio: 'Passionate about creating innovative solutions through technology',
            avatar: 'https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?ga=GA1.1.168732325.1722966352&semt=ais_hybrid'
        },
        skills: [
            'JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design'
        ],
        projects: [
            {
                id: 1,
                title: 'E-learning Platform',
                description: 'Developed a responsive web application for online learning',
                technologies: ['React', 'Firebase', 'Tailwind CSS'],
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhoS0WCwlOzl6KU3-OLgcMESirm7DzdDmZQ&s'
            }
        ],
        certifications: [
            {
                id: 1,
                name: 'Web Development Bootcamp',
                issuer: 'Tech Academy',
                date: '2023'
            }
        ]
    }

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8">
                    <div className="flex items-center space-x-6">
                        <img
                            src={portfolioData.profile.avatar}
                            alt={portfolioData.profile.name}
                            className="w-32 h-32 rounded-full border-4 border-white"
                        />
                        <div className="text-black">
                            <h1 className="text-3xl font-bold">{portfolioData.profile.name}</h1>
                            <p className="text-xl">{portfolioData.profile.title}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Bio */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-600">{portfolioData.profile.bio}</p>
                    </section>

                    {/* Skills */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {portfolioData.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {portfolioData.projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-md box-shadow-lg transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                        <div className="space-y-4">
                            {portfolioData.certifications.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                >
                                    <div>
                                        <h3 className="font-semibold">{cert.name}</h3>
                                        <p className="text-gray-600">{cert.issuer}</p>
                                    </div>
                                    <span className="text-gray-500">{cert.date}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </motion.div>
        </div>
    )
}

export default StudentPortfolio
