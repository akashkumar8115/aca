import React from 'react';
import { motion } from 'framer-motion';

const SearchHistory = ({ history, onHistoryClick, onClearHistory }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md p-4 mb-6"
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recent Searches</h3>
                <button
                    onClick={onClearHistory}
                    className="text-sm text-gray-500 hover:text-gray-700"
                >
                    Clear History
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {history.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => onHistoryClick(item)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

export default SearchHistory;
