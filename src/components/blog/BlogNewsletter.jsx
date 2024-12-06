import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const BlogNewsletter = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-green-600 text-white rounded-xl p-8 my-12"
        >
            <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">
                    Subscribe to Our Newsletter
                </h3>
                <p className="mb-6 opacity-90">
                    Get the latest articles, resources, and updates directly in your inbox.
                </p>
                <form className="flex gap-4 text-gray-600">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white/20"
                    />
                    <button
                        type="submit"
                        className="bg-white text-black-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors"
                    >
                        Subscribe <FaPaperPlane />
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default BlogNewsletter;
