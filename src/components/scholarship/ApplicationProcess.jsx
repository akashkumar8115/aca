import React from 'react';
import { motion } from 'framer-motion';

const ApplicationProcess = () => {
    const steps = [
        {
            number: "01",
            title: "Online Registration",
            description: "Complete the registration form on ACA website with personal and academic details"
        },
        {
            number: "02",
            title: "Document Submission",
            description: "Upload required academic certificates and supporting documents"
        },
        {
            number: "03",
            title: "Test Scheduling",
            description: "Choose your preferred test date and time slot from available options"
        },
        {
            number: "04",
            title: "Scholarship Test",
            description: "Take the online/offline scholarship test on the scheduled date"
        },
        {
            number: "05",
            title: "Results & Selection",
            description: "Results announcement and scholarship distribution based on performance"
        }
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-4 md:space-x-8"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center text-white font-bold">
                                {step.number}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-black-600">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="#apply-now"
                        className="inline-block bg-violet-50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-600 transition-colors"
                    >
                        Apply Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ApplicationProcess;
