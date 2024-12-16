import React from 'react';
import { motion } from 'framer-motion';
import ScholarshipForm from '../../components/scholarship/ScholarshipForm';
import EligibilitySection from '../../components/scholarship/EligibilitySection';
import TestStructure from '../../components/scholarship/TestStructure';
import ScholarshipTiers from '../../components/scholarship/ScholarshipTiers';
import Benefits from '../../components/scholarship/Benefits';
import FAQSection from '../../components/scholarship/FAQSection';
import ContactSection from '../../components/scholarship/ContactSection';
import { FaGraduationCap, FaUsers, FaTrophy, FaGlobe } from 'react-icons/fa';

const Aca_Schorarship_program = () => {
    const stats = [
        { icon: <FaGraduationCap />, number: "10,000+", text: "Students Benefited" },
        { icon: <FaUsers />, number: "500+", text: "Expert Mentors" },
        { icon: <FaTrophy />, number: "₹2Cr+", text: "Scholarship Disbursed" },
        { icon: <FaGlobe />, number: "100+", text: "Partner Institutions" }
    ];
    const scrollToForm = () => {
        const formSection = document.getElementById('scholarship_form');
        if (formSection) {
            window.scrollTo({
                top: formSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-b from-violet-100 to-white">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-[80vh] flex items-center justify-center bg-violet-200"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50/80 to-transparent" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-black-800"
                    >
                        Transform Your Future with ACA Scholarships
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-black-600 mb-8"
                    >
                        Empowering talented students across India with comprehensive financial support and mentorship
                    </motion.p>
                    <motion.button onClick={scrollToForm}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-violet-500 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-violet-600 transition-colors"
                    >
                        <a target="_blank" href="https://docs.google.com/forms/u/1/d/e/1FAIpQLScRowEYAyY4wAxlHndXYBndh4i57FHDtP7sesz5Ho5_KM2PTQ/formResponse?edit2=2_ABaOnufwCfxhyl1v7aK5dm57MWyxdWJUB5AMkauJRyqwpzPsDEa51x-LfgVPJACHjQ">
                            Apply Now
                        </a>
                    </motion.button>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-16 px-4 -mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className="text-violet-500 text-3xl mb-4 flex justify-center">
                                    {stat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-black-800 mb-2">{stat.number}</h3>
                                <p className="text-black-600">{stat.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <EligibilitySection />
            <TestStructure />
            <ScholarshipTiers />
            <Benefits />
            <div id="scholarship_form">
                <ScholarshipForm />
            </div>
            <FAQSection />
            <ContactSection />

            {/* CTA Section */}
            <section className="py-16 px-4 bg-violet-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-lg mb-8">Join thousands of successful scholars who transformed their careers with ACA</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-violet-500 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-violet-600 transition-colors"
                    >
                        Begin Application
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Aca_Schorarship_program;
