import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const { data } = await axios.get('http://localhost:5000/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProfileData(data);
            } catch (error) {
                if (error.response?.status === 401) {
                    toast.error('Session expired. Please login again.');
                    logout();
                    navigate('/login');
                } else {
                    toast.error('Failed to fetch profile data');
                }
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchProfile();
        } else {
            navigate('/login');
        }
    }, [user, navigate, logout]);

    // if (loading) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center">
    //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500">hjvjghvb</div>
    //         </div>
    //     );
    // }

    // if (!profileData) {
    //     return null;
    // }




    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProfileData(response.data);
            } catch (error) {
                toast.error('Failed to fetch profile data');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32">
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"
                >
                    <div className="text-center mb-8">
                        <div className="relative w-32 h-32 mx-auto">
                            <img
                                src={profileData?.profileImage || 'https://attic.sh/8lfum8f9b0qplpe5jtj7m1kdcrrn'}
                                alt={profileData?.name}
                                className="rounded-full w-full h-full object-cover border-4 border-green-500"
                            />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mt-4">{profileData?.name}</h1>
                        <p className="text-gray-600">{profileData?.email}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Contact Information</h3>
                                <p className="text-gray-600">Phone: {profileData?.phone || 'Not provided'}</p>
                                <p className="text-gray-600">Location: {profileData?.location || 'Not provided'}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Bio</h3>
                                <p className="text-gray-600">{profileData?.bio || 'No bio provided'}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Education</h3>
                                {profileData?.education?.map((edu, index) => (
                                    <div key={index} className="mb-2">
                                        <p className="font-medium">{edu.degree} in {edu.field}</p>
                                        <p className="text-gray-600">{edu.institution} - {edu.year}</p>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {profileData?.skills?.map((skill, index) => (
                                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center space-x-4">
                        <Link
                            to="/update-profile"
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                        >
                            Edit Profile
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;