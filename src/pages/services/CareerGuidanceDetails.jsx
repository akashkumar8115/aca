import React from 'react';
import { Helmet } from 'react-helmet';
// import './Services.css';

const CareerGuidanceDetails = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Career Guidance Services | Your Future Path</title>
                <meta name="description" content="Professional career guidance services to help you make informed decisions about your career path and professional development." />
            </Helmet>

            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">Career Guidance Services</h1>

                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-6">Expert Career Guidance</h2>
                        <p className="text-xl mb-4">
                            Our professional career guidance services are designed to help you navigate your career path with confidence and clarity.
                        </p>
                        <p className="text-gray-700">
                            We provide comprehensive support through various stages of your career development, helping you make informed decisions about your professional future.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 h-full">
                        <h3 className="text-xl font-bold mb-4">Career Assessment</h3>
                        <p className="mb-4">
                            Comprehensive evaluation of your skills, interests, and aptitudes to identify suitable career paths.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">✓ Personality profiling</li>
                            <li className="flex items-center">✓ Skills assessment</li>
                            <li className="flex items-center">✓ Interest mapping</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 h-full">
                        <h3 className="text-xl font-bold mb-4">Career Planning</h3>
                        <p className="mb-4">
                            Structured guidance to help you develop a clear career roadmap and action plan.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">✓ Goal setting</li>
                            <li className="flex items-center">✓ Action planning</li>
                            <li className="flex items-center">✓ Timeline development</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 h-full">
                        <h3 className="text-xl font-bold mb-4">Professional Development</h3>
                        <p className="mb-4">
                            Guidance on enhancing your professional skills and qualifications.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">✓ Skill development plans</li>
                            <li className="flex items-center">✓ Training recommendations</li>
                            <li className="flex items-center">✓ Certification guidance</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-12">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold mb-2">1. Initial Consultation</h4>
                                <p className="text-gray-700">
                                    We begin with a thorough discussion of your career goals, experiences, and challenges.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-2">2. Assessment & Analysis</h4>
                                <p className="text-gray-700">
                                    Conduct comprehensive assessments to understand your strengths, weaknesses, and potential.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-2">3. Strategy Development</h4>
                                <p className="text-gray-700">
                                    Create a personalized career development strategy based on assessment results.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-2">4. Implementation Support</h4>
                                <p className="text-gray-700">
                                    Ongoing guidance and support as you implement your career development plan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-6">
                        Take the first step towards a fulfilling career with our expert guidance.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
                        Schedule a Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CareerGuidanceDetails;
