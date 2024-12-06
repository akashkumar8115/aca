import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CourseEnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8 mt-8"
        >
            <h3 className="text-2xl font-bold mb-6">Course Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-violet-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-violet-200"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-violet-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Interested Course</label>
                        <select
                            value={formData.course}
                            onChange={(e) => setFormData({...formData, course: e.target.value})}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-violet-200"
                            required
                        >
                            <option value="">Select a course</option>
                            <option value="btech">B.Tech</option>
                            <option value="mba">MBA</option>
                            <option value="bba">BBA</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-violet-200"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-violet-600 text-white py-3 rounded-md hover:bg-violet-700 transition-colors"
                >
                    Submit Enquiry
                </button>
            </form>
        </motion.div>
    );
};

export default CourseEnquiryForm;
