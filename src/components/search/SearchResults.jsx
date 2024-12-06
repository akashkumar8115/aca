import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { searchableContent } from '../../data/searchableContent';
import { RiSearchLine } from 'react-icons/ri';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [results, setResults] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        if (query) {
            const allContent = Object.values(searchableContent).flat();

            const searchResults = allContent.filter(item => {
                const searchableText = `${item.title} ${item.content}`.toLowerCase();
                return searchableText.includes(query.toLowerCase());
            });

            setResults(searchResults);
        }
    }, [query]);

    const filteredResults = activeFilter === 'all'
        ? results
        : results.filter(item => item.type === activeFilter);

    const contentTypes = ['all', 'education', 'service', 'blog', 'about'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 pt-24">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Search Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl font-bold mb-4">
                            Search Results for "{query}"
                        </h1>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                            {contentTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setActiveFilter(type)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                      ${activeFilter === type
                                            ? 'bg-violet-600 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Results */}
                    <div className="space-y-4 pt-4">
                        {filteredResults.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <Link to={result.path}>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className={`text-sm font-medium px-3 py-1 rounded-full mb-2 inline-block
                          ${result.type === 'education' ? 'bg-blue-100 text-blue-800' :
                                                    result.type === 'service' ? 'bg-green-100 text-green-800' :
                                                        result.type === 'blog' ? 'bg-purple-100 text-purple-800' :
                                                            'bg-gray-100 text-gray-800'}`}
                                            >
                                                {result.type}
                                            </span>
                                            <h2 className="text-xl font-semibold mb-2">{result.title}</h2>
                                            <p className="text-gray-600">{result.content}</p>
                                        </div>
                                        <RiSearchLine className="text-gray-400 text-xl" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}

                        {filteredResults.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-red-600">No results found for your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;