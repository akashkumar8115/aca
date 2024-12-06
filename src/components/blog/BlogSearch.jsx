import React from 'react';
import { FaSearch } from 'react-icons/fa';

const BlogSearch = ({ onSearch }) => {
    return (
        <div className="relative mb-8">
            <input
                type="text"
                placeholder="Search articles..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 outline-none"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
    );
};

export default BlogSearch;
