import React from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
// import scholarshipImg from '../assets/scholarship.jpg';

const scholarshipTypes = [
    {
        title: "Types of Scholarships",
        categories: [
            {
                name: "Merit-Based",
                description: "Awarded based on academic, athletic, or artistic achievements.",
                examples: ["University Merit Scholarships", "Athletic Scholarships", "Arts Excellence Awards"]
            },
            {
                name: "Need-Based",
                description: "Provided based on financial situation to assist low-income students.",
                examples: ["Federal Grants", "University Need-Based Aid", "State Assistance Programs"]
            },
            {
                name: "Student-Specific",
                description: "Scholarships for specific demographics or groups, promoting diversity and inclusion.",
                examples: ["Minority Scholarships", "First-Generation Scholarships", "Women in STEM Scholarships"]
            },
            {
                name: "Career-Specific",
                description: "For students pursuing certain careers, often funded by industries needing professionals in those areas.",
                examples: ["Nursing Scholarships", "STEM Incentive Scholarships", "Teaching Fellowships"]
            },
            {
                name: "Location-Based",
                description: "Restricted to students from certain regions or for studying in specific locations.",
                examples: ["State-Specific Scholarships", "Local Government Aid", "Regional Foundations"]
            },
            {
                name: "Military Scholarships",
                description: "For military members, veterans, or their families to support educational and career advancement.",
                examples: ["GI Bill Benefits", "Military Family Scholarships", "ROTC Scholarships"]
            },
            {
                name: "Extracurricular Scholarships",
                description: "Awarded based on involvement in extracurriculars, community service, or leadership.",
                examples: ["Community Service Awards", "Leadership Scholarships", "Volunteer Organization Scholarships"]
            },
            {
                name: "Employer-Sponsored",
                description: "Provided by companies for employees or their dependents, often as part of employee benefits.",
                examples: ["Company-Sponsored Scholarships", "Dependent Scholarships", "Corporate Tuition Assistance"]
            },
            {
                name: "International Scholarships",
                description: "Available to international students or for studying abroad, funded by institutions or governments.",
                examples: ["Fulbright Program", "Chevening Scholarship", "Erasmus Mundus"]
            },
            {
                name: "Creative/Artistic Scholarships",
                description: "For students with talents in arts, music, writing, or other creative fields.",
                examples: ["Art Scholarships", "Music Scholarships", "Writing Competitions"]
            }
        ]
    }
];


const Scholarships = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-4">Scholarship & Financial Aid Guide</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive information about scholarships, financial aid options, and application processes
                    </p>
                </motion.div>

                <Tab.Group>
                    <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-1 mb-8">
                        {scholarshipTypes.map((section, idx) => (
                            <Tab
                                key={idx}
                                className={({ selected }) =>
                                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ${selected
                                        ? 'bg-green-100 shadow text-blue-700'
                                        : 'text-blue-900 hover:bg-white/[0.12] hover:text-blue-800'
                                    }`
                                }
                            >
                                {section.title}
                            </Tab>
                        ))}
                    </Tab.List>

                    <Tab.Panels>
                        {scholarshipTypes.map((section, idx) => (
                            <Tab.Panel
                                key={idx}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {section.categories.map((category, catIdx) => (
                                    <motion.div
                                        key={catIdx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: catIdx * 0.1 }}
                                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                                    >
                                        <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                                        <p className="text-gray-600 mb-4">{category.description}</p>
                                        <div className="space-y-2">
                                            {category.examples.map((example, exIdx) => (
                                                <div key={exIdx} className="flex items-center space-x-2">
                                                    <span className="text-green-500">•</span>
                                                    <span>{example}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
};

export default Scholarships;
