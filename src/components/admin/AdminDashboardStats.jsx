import React from 'react';
import { FaGraduationCap, FaUsers, FaChartLine, FaUniversity } from 'react-icons/fa';

const AdminDashboardStats = () => {
    const stats = [
        {
            title: 'Total Courses',
            value: '150+',
            icon: FaGraduationCap,
            color: 'bg-blue-500'
        },
        {
            title: 'Total Students',
            value: '5000+',
            icon: FaUsers,
            color: 'bg-green-500'
        },
        {
            title: 'Placement Rate',
            value: '92%',
            icon: FaChartLine,
            color: 'bg-purple-500'
        },
        {
            title: 'Partner Institutes',
            value: '50+',
            icon: FaUniversity,
            color: 'bg-red-500'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <div className={`${stat.color} p-3 rounded-full`}>
                            <stat.icon className="text-white text-xl" />
                        </div>
                        <div className="ml-4">
                            <p className="text-gray-500 text-sm">{stat.title}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminDashboardStats;
