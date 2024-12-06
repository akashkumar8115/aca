import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserGraduate } from 'react-icons/fa';

const EligibilitySection = () => {
    const criteria = [
        {
            category: "Class 10 Students",
            requirements: [
                "Minimum 75% in previous academic year",
                "Strong aptitude in core subjects",
                "Active participation in extracurriculars"
            ]
        },
        {
            category: "Class 11 & 12 Students",
            requirements: [
                "Consistent academic performance",
                "Science/Commerce stream students",
                "Demonstrated leadership qualities"
            ]
        },
        {
            category: "College Students",
            requirements: [
                "Currently enrolled in recognized institution",
                "CGPA of 7.5 or above",
                "Research or project experience"
            ]
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Eligibility Criteria</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {criteria.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <div className="flex items-center mb-4">
                                <FaUserGraduate className="text-2xl text-violet-50 mr-2" />
                                <h3 className="text-xl font-bold">{item.category}</h3>
                            </div>
                            <ul className="space-y-3">
                                {item.requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EligibilitySection;
