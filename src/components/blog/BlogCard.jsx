import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaTag, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const BlogCard = ({ blog }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative overflow-hidden group h-48">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
                            {blog.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        <FaCalendar className="text-blue-600" />
                        {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaUser className="text-blue-600" />
                        {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaClock className="text-blue-600" />
                        {blog.readTime}
                    </span>
                </div>

                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.description}
                </p>

                <button className="group flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
                    <Link
                        to={`/about/our-blog/${blog.id}`}
                        className="group flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                    >
                        Read Full Article
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </button>
            </div>
        </motion.div>
    );
};

export default BlogCard;
