import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Loading from '../components/loader/Loading';
import { Helmet } from 'react-helmet';
import ApiData from "../data/api.json";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLocation, setFilterLocation] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = ApiData;
                setJobs(response.jobs);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch job opportunities');
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(filterLocation.toLowerCase()) &&
        (selectedCategory === 'all' || job.category === selectedCategory)
    );
    const categories = ['all', ...new Set(jobs.filter(job => job.category).map(job => job.category))];
    // const categories = ['all', ...new Set(jobs.map(job => job.category))];

    if (loading) return <Loading />;
    if (error) return <div className="text-center mt-20 text-red-600">{error}</div>;

    return (
        <>
            <Helmet>
                <title>Job Opportunities | Admin Career Academy</title>
                <meta name="description" content="Browse available job positions" />
            </Helmet>
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-12 pt-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                            Find Your Dream Job
                        </h1>

                        {/* Search and Filter Section */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search jobs..."
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                    <span className="absolute right-3 top-3 text-gray-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Location..."
                                        onChange={(e) => setFilterLocation(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                                <select
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category === 'all' ? 'All Categories' : category}
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Jobs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredJobs.map((job) => (
                                <motion.div
                                    key={job.id}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                                    {job.type}
                                                </span>
                                            </div>
                                            <h3 className="text-lg text-blue-600 mb-4">{job.company}</h3>
                                            <div className="space-y-2 text-gray-600">
                                                <p className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                    {job.location}
                                                </p>
                                                <p className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {job.salary}
                                                </p>
                                            </div>
                                            <Link
                                                to={`/services/job/${job.id}`}
                                                className="mt-6 block w-full text-center py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                        <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500">
                                            Posted: {new Date(job.postedDate).toLocaleDateString()}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filteredJobs.length === 0 && (
                            <div className="text-center mt-12">
                                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No jobs found</h3>
                                <p className="text-gray-500">Try adjusting your search criteria</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Jobs;