import React from 'react';
import { motion } from 'framer-motion';

const BlogTags = ({ tags, selectedTags, onTagSelect }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mb-8"
        >
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => onTagSelect(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTags.includes(tag)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                >
                    #{tag}
                </button>
            ))}
        </motion.div>
    );
};

export default BlogTags;
