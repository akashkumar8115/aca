
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AdminCourseTable from '../../components/admin/AdminCourseTable';
import AdminCourseForm from '../../components/admin/AdminCourseForm';
import AdminDashboardStats from '../../components/admin/AdminDashboardStats';
import { courseData } from '../../data/courseData';

const CourseComparisonAdmin = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Engineering');
    const [isAddingCourse, setIsAddingCourse] = useState(false);

    useEffect(() => {
        setCourses(courseData[selectedCategory]?.courses || []);
    }, [selectedCategory]);

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
                    <button
                        onClick={() => setIsAddingCourse(true)}
                        className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700"
                    >
                        Add New Course
                    </button>
                </div>

                <AdminDashboardStats />

                <div className="mt-8 bg-white rounded-lg shadow">
                    <AdminCourseTable 
                        courses={courses}
                        onEdit={(course) => console.log('Edit course:', course)}
                        onDelete={(courseId) => console.log('Delete course:', courseId)}
                    />
                </div>

                {isAddingCourse && (
                    <AdminCourseForm
                        onClose={() => setIsAddingCourse(false)}
                        onSubmit={(data) => {
                            console.log('New course data:', data);
                            setIsAddingCourse(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default CourseComparisonAdmin;
