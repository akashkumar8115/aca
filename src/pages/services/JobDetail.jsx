import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ApiData from "../../data/api.json";

const JobDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const foundJob = ApiData.jobs.find(j => j.id === parseInt(id));
                setJob(foundJob);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };
        fetchJob();
    }, [id]);

    if (!job) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-12 pt-28">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-black p-8 relative">
                        <button
                            className="absolute right-4 top-4 bg-green-300 px-6 py-2 rounded-full hover:bg-green-400 transition-colors duration-300"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                        <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
                        <h4 className="text-xl opacity-90">{job.company}</h4>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <section className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4">Job Description</h3>
                                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                                </section>

                                <section className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                                    <ul className="space-y-3">
                                        {job.requirements.map((req, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start space-x-2 text-gray-600"
                                            >
                                                <span className="text-blue-500 mt-1">•</span>
                                                <span>{req}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-4">Job Details</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            </svg>
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{job.salary}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-6 bg-green-300 text-black py-3 px-4 rounded-lg hover:bg-green-400 transition-colors duration-300 font-semibold">
                                        <Link to="/services/jobs-application">
                                            Apply Now
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default JobDetail;
