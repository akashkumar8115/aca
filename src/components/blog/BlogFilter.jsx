import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';

const BlogFilter = ({ onFilterChange }) => {
    const categories = [
        "All",
        "Tech Trends",
        "IT Services",
        "Artificial Intelligence",
        "Cybersecurity",
        "Digital Transformation",
        "Company Culture"
    ];

    const [activeCategory, setActiveCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        onFilterChange(category);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <div className="flex items-center gap-2 mb-4">
                <FaFilter className="text-blue-600" />
                <h3 className="font-semibold">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${activeCategory === category
                                ? 'bg-blue-600 text-white hover:bg-green-700 hover:text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

export default BlogFilter;
