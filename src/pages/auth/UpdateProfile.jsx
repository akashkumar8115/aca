import React, { useState, useEffect ,useRef} from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
        location: '',
        education: [{
            institution: '',
            degree: '',
            field: '',
            year: ''
        }],
        skills: [],
        profileImage: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setFormData(response.data);
            } catch (error) {
                toast.error('Failed to fetch profile data');
            }
        };
        fetchUserData();
    }, []);

    const handleEducationChange = (index, field, value) => {
        setFormData((prevState) => {
            const updatedEducation = prevState.education.map((edu, i) =>
                i === index ? { ...edu, [field]: value } : edu
            );
            return {
                ...prevState,
                education: updatedEducation
            };
        });
    };


    const addEducation = () => {
        setFormData({
            ...formData,
            education: [...formData.education, { institution: '', degree: '', field: '', year: '' }]
        });
    };

    const deleteEducation = (index) => {
        const updatedEducation = formData.education.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            education: updatedEducation
        });
    };

    const handleSkillsChange = (e) => {
        const skills = e.target.value.split(',').map(skill => skill.trim());
        setFormData({ ...formData, skills });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:5000/api/user/update-profile', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success('Profile updated successfully');
            navigate('/profile');
        } catch (error) {
            toast.error('Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error('Image size should be less than 5MB');
                return;
            }

            const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                toast.error('Please upload a valid image file (JPEG, PNG, or WEBP)');
                return;
            }

            setImagePreview(URL.createObjectURL(file));
            const formData = new FormData();
            formData.append('profileImage', file);

            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(
                    'http://localhost:5000/api/user/update-profile-image',
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                );
                setFormData(prev => ({
                    ...prev,
                    profileImage: response.data.profileImage
                }));
                toast.success('Profile image updated successfully');
            } catch (error) {
                toast.error('Failed to update profile image');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
                >
                    <div className="mb-8 text-center">
                        <div className="relative w-32 h-32 mx-auto">
                            <img
                                src={imagePreview || formData.profileImage || 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover border-4 border-green-500"
                            />
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="absolute bottom-0 right-0 bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Click to update profile picture</p>
                    </div>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Update Profile</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Location</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Bio</label>
                            <textarea
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                                rows="4"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Education</label>
                            {formData.education.map((edu, index) => (
                                <div key={index} className="grid grid-cols-2 gap-4 mb-4 items-center">
                                    <input
                                        placeholder="Institution"
                                        value={edu.institution}
                                        onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border"
                                    />
                                    <input
                                        placeholder="Degree"
                                        value={edu.degree}
                                        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border"
                                    />
                                    <input
                                        placeholder="Field of Study"
                                        value={edu.field}
                                        onChange={(e) => handleEducationChange(index, 'field', e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border"
                                    />
                                    <input
                                        placeholder="Year"
                                        value={edu.year}
                                        onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => deleteEducation(index)}
                                        className="text-red-600 hover:text-red-700 ml-2"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addEducation}
                                className="text-green-600 hover:text-green-700"
                            >
                                + Add Education
                            </button>
                        </div>


                        <div>
                            <label className="block text-gray-700 mb-2">Skills (comma-separated)</label>
                            <input
                                type="text"
                                value={formData.skills.join(', ')}
                                onChange={handleSkillsChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                                // Continuing from previous code...
                                placeholder="e.g. JavaScript, React, Node.js"
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => navigate('/profile')}
                                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                disabled={loading}
                            >
                                {loading ? 'Updating...' : 'Update Profile'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default UpdateProfile;

