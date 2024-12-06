import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SearchResultCard = ({ result, index }) => {
  const { item, score } = result;
  const relevanceScore = Math.round((1 - score) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          item.type === 'course' ? 'bg-blue-100 text-blue-800' :
          item.type === 'resource' ? 'bg-green-100 text-green-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {item.type}
        </span>
        <span className="text-sm text-gray-500">
          {relevanceScore}% match
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>

      {item.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}

      <Link
        to={`/${item.type}s/${item.id}`}
        className="text-violet-600 hover:text-violet-700 font-medium text-sm"
      >
        Learn more →
      </Link>
    </motion.div>
  );
};

export default SearchResultCard;
