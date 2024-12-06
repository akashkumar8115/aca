
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminCourseTable from '../../components/admin/AdminCourseTable';
import AdminCourseForm from '../../components/admin/AdminCourseForm';
import { courseData } from '../../data/courseData';

const CourseManagement = () => {
    const [selectedCategory, setSelectedCategory] = useState('Engineering');
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-violet-600 text-white px-6 py-2 rounded-lg"
                    >
                        Add New Course
                    </button>
                </div>

                {/* Category Selection */}
                <div className="mb-8">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 border rounded"
                    >
                        {Object.keys(courseData).map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Course Table */}
                <AdminCourseTable
                    courses={courseData[selectedCategory].courses}
                    onEdit={(course) => console.log('Edit:', course)}
                    onDelete={(id) => console.log('Delete:', id)}
                />

                {/* Add/Edit Form Modal */}
                {showForm && (
                    <AdminCourseForm
                        onClose={() => setShowForm(false)}
                        onSubmit={(data) => {
                            console.log('Form submitted:', data);
                            setShowForm(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default CourseManagement;
