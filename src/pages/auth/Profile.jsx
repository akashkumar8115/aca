import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32">
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
                >
                    <div className="text-center mb-8">
                        <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-4xl text-blue-600">{user?.name?.charAt(0)}</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">{user?.name}</h1>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>

                    <div className="space-y-6">
                        <div className="border-t border-gray-200 pt-6">
                            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-600 mb-1">Full Name</label>
                                    <p className="font-medium">{user?.name}</p>
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Email</label>
                                    <p className="font-medium">{user?.email}</p>
                                </div>
                                {/* Add more profile fields as needed */}
                            </div>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <Link
                                to="/update-profile"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Edit Profile
                            </Link>
                            <Link
                                to="/change-password"
                                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                            >
                                Change Password
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
