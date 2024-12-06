import React from 'react';
import { motion } from 'framer-motion';

const suggestions = [
    {
        category: 'Popular Courses',
        items: ['Computer Science', 'Business Management', 'Data Science']
    },
    {
        category: 'Top Services',
        items: ['Career Counseling', 'Study Abroad', 'Placement Assistance']
    }
];

const SearchSuggestions = ({ onSuggestionClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
        >
            <h3 className="font-semibold mb-4">Popular Searches</h3>

            {suggestions.map((section, index) => (
                <div key={index} className="mb-6 last:mb-0">
                    <h4 className="text-sm text-gray-600 mb-2">{section.category}</h4>
                    <div className="flex flex-wrap gap-2">
                        {section.items.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => onSuggestionClick(item)}
                                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default SearchSuggestions;
