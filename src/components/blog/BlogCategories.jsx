import React from 'react';
import { motion } from 'framer-motion';

const BlogCategories = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 mb-8"
        >
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                >
                    {category.name}
                    <span className="ml-2 text-sm">
                        ({category.count})
                    </span>
                </button>
            ))}
        </motion.div>
    );
};

export default BlogCategories;
