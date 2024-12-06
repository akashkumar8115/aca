import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import collegeData from '../../data/collegeData.json';

const CollegeList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedProgram, setSelectedProgram] = useState('All');

    console.log(collegeData);

    // Extract unique types and programs from college data
    const types = ['All', ...new Set(collegeData.colleges.map(college => college.type))];
    const programs = ['All', ...new Set(collegeData.colleges.flatMap(college => college.programs))];

    
    const filteredColleges = collegeData.colleges.filter(college => {
        const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'All' || college.type === selectedType;
        const matchesProgram = selectedProgram === 'All' || college.programs.includes(selectedProgram);
        // console.log(matchesSearch);
        return matchesSearch && matchesType && matchesProgram;
    });
    
    useEffect(() => {
        // filteredColleges;
        console.log(collegeData);
    }, [searchTerm, selectedType, selectedProgram]);

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-center mb-8"
                >
                    Explore Top Colleges
                </motion.h1>

                <div className="space-y-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search colleges..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-violet-50"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-violet-50"
                        >
                            {types.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>

                        <select
                            value={selectedProgram}
                            onChange={(e) => setSelectedProgram(e.target.value)}
                            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-violet-50"
                        >
                            {programs.map(program => (
                                <option key={program} value={program}>{program}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredColleges.map(college => (
                        <motion.div
                            key={college.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">{college.name}</h3>
                                <div className="space-y-2 text-black-600">
                                    <p><span className="font-medium">Location:</span> {college.location}</p>
                                    <p><span className="font-medium">Type:</span> {college.type}</p>
                                    <p><span className="font-medium">Founded:</span> {college.founded}</p>
                                    <p><span className="font-medium">Tuition:</span> ${college.tuition.toLocaleString()}/year</p>
                                    <p><span className="font-medium">Acceptance Rate:</span> {college.acceptance_rate}%</p>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-medium mb-2">Programs:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {college.programs.map((program, index) => (
                                            <span
                                                key={index}
                                                className="bg-violet-100 text-black-800 px-2 py-1 rounded-full text-sm"
                                            >
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollegeList;