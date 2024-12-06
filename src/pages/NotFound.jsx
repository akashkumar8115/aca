import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoHomeOutline, IoArrowBackOutline } from 'react-icons/io5';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-violet-100 flex items-center justify-center px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl w-full text-center"
            >
                <motion.h1 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-9xl font-bold text-violet-600 mb-4"
                >
                    404
                </motion.h1>
                
                <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
                
                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved. 
                    Don't worry, you can find plenty of other things on our homepage.
                </p>

                <div className="space-y-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block"
                    >
                        <Link 
                            to="/" 
                            className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-green-700 transition-colors mr-4"
                        >
                            <IoHomeOutline className="mr-2" />
                            Back to Home
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block"
                    >
                        <button 
                            onClick={() => window.history.back()}
                            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            <IoArrowBackOutline className="mr-2" />
                            Go Back
                        </button>
                    </motion.div>
                </div>

                <div className="mt-12 space-y-4">
                    <h3 className="text-xl font-semibold">You might be interested in:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Services', 'About', 'Contact-us', 'Blogs'].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-violet-600 hover:text-violet-800">
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
