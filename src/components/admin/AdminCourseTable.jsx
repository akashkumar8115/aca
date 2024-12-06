import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AdminCourseTable = ({ courses, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Fees
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{course.duration}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{course.fees}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    onClick={() => onEdit(course)}
                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => onDelete(course.id)}
                                    className="text-red-600 hover:text-red-900"
                                >
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminCourseTable;