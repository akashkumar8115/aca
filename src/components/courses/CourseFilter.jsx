import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CourseFilter = ({ category, onFilterChange }) => {
    const [filters, setFilters] = useState({
        duration: 'all',
        fees: 'all',
        location: 'all'
    });

    const handleFilterChange = (type, value) => {
        const newFilters = { ...filters, [type]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
            <h3 className="text-xl font-semibold mb-4">Filter Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Duration Filter */}
                <div>
                    <label className="block text-sm font-medium mb-2">Duration</label>
                    <select 
                        value={filters.duration}
                        onChange={(e) => handleFilterChange('duration', e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="all">All Durations</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                    </select>
                </div>

                {/* Fees Filter */}
                <div>
                    <label className="block text-sm font-medium mb-2">Fees Range</label>
                    <select 
                        value={filters.fees}
                        onChange={(e) => handleFilterChange('fees', e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="all">All Ranges</option>
                        <option value="0-500000">Below 5 Lakhs</option>
                        <option value="500000-1000000">5-10 Lakhs</option>
                        <option value="1000000+">Above 10 Lakhs</option>
                    </select>
                </div>

                {/* Location Filter */}
                <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <select 
                        value={filters.location}
                        onChange={(e) => handleFilterChange('location', e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="all">All Locations</option>
                        <option value="metro">Metro Cities</option>
                        <option value="tier2">Tier 2 Cities</option>
                        <option value="tier3">Tier 3 Cities</option>
                    </select>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseFilter;
