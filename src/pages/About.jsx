import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TeamMember from '../components/about/TeamMember'
import CompanyTimeline from '../components/about/CompanyTimeline'
// In About.jsx, add these imports
import FounderProfile from '../components/about/FounderProfile'
import ValueSection from '../components/about/ValueSection'
// Add these imports
import AchievementsSection from '../components/about/AchievementsSection'
import TestimonialsSection from '../components/about/TestimonialsSection'
import PartnersSection from '../components/about/PartnersSection'
import MissionVisionDetails from '../components/about/MissionVisionDetails'
import TeamGallery from '../components/about/TeamGallery'
import ContactSection from '../components/about/ContactSection'
import CompanyHistory from '../components/about/CompanyHistory'
import LocationsSection from '../components/about/LocationsSection'
import NewsSection from '../components/about/NewsSection'
import AwardsRecognition from '../components/about/AwardsRecognition'
import TechnologyStack from '../components/about/TechnologyStack'
import TeamValues from '../components/about/TeamValues'
import FounderJourney from '../components/about/FounderJourney'
import TeamInsights from '../components/about/TeamInsights'
const About = () => {
    return (
        <>
            <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
                <div className="w-11/12 lg:w-10/12 mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold mb-6">About ACA Pvt. Ltd.</h1>
                        <p className="text-lg text-black-600 max-w-3xl mx-auto">
                            Founded in 2021, ACA Pvt. Ltd. is dedicated to empowering students, professionals, and educators through innovative career development solutions.
                        </p>
                    </motion.div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-black-600">
                                To enable young people to reach their full potential by equipping them with hands-on experience, practical knowledge, and expert mentorship.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                            <p className="text-black-600">
                                To become a trusted leader in career development, setting a new standard for job-readiness and professional growth.
                            </p>
                        </div>
                    </div>

                    {/* Founder's Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
                        <h2 className="text-2xl font-semibold mb-6">Founder's Journey</h2>
                        <div className="space-y-4 text-black-600">
                            <p>
                                Mohd Shadab Qusari's story is one of ambition, resilience, and relentless pursuit of knowledge. Born and raised in Uttar Pradesh, his journey from JNV Kintampur to Panjab University exemplifies determination and excellence.
                            </p>
                            <p>
                                During his college years, Shadab identified the gap between academic curriculum and industry requirements, leading to the foundation of ACA Pvt. Ltd.
                            </p>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-8 text-center">Our Leadership Team</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <TeamMember
                                name="Mohd Shadab Qusari"
                                role="Founder & CEO"
                                description="Visionary leader with expertise in Electronics Engineering"
                            />
                            <TeamMember
                                name="Manish Yadav"
                                role="Co-founder & CTO"
                                description="Technical expert ensuring robust platform development"
                            />
                            <TeamMember
                                name="Asfaq Srivastava"
                                role="Co-founder & COO"
                                description="Analytics specialist optimizing career resources"
                            />
                            <TeamMember
                                name="Akash Kumar"
                                role="Technical Lead"
                                description="Full-stack developer driving digital initiatives"
                            />
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
                        <p className="mb-6 text-black-600">
                            Be part of our mission to transform career development in India
                        </p>
                        <Link
                            to="/contact-us"
                            className="inline-block bg-violet-500 text-white px-8 py-3 rounded-lg hover:bg-green-500 transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 pb-12">
                <div className="w-11/12 lg:w-10/12 mx-auto">
                    <CompanyTimeline />
                    <FounderProfile />
                    <ValueSection />
                    <AchievementsSection />
                    <TestimonialsSection />
                    <PartnersSection />
                    <MissionVisionDetails />
                    <TeamGallery />
                    <CompanyHistory />
                    <LocationsSection />
                    <NewsSection />
                    <div className="space-y-12">
                        <AwardsRecognition />
                        <TechnologyStack />
                        <TeamValues />
                    </div>
                    <FounderJourney />
                    <TeamInsights />
                    <ContactSection />
                </div>
            </div>


        </>
    )
}

export default About