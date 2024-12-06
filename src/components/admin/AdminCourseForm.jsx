import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminCourseForm = ({ onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState(initialData || {
        name: '',
        duration: '',
        fees: '',
        eligibility: '',
        features: [''],
        specializations: [''],
        placements: {
            averagePackage: '',
            highestPackage: '',
            placementRate: ''
        }
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            <div className="bg-white rounded-lg p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">
                    {initialData ? 'Edit Course' : 'Add New Course'}
                </h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(formData);
                }}>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block mb-2">Course Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Duration</label>
                            <input
                                type="text"
                                value={formData.duration}
                                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* Add more form fields */}

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-violet-600 text-white rounded"
                        >
                            {initialData ? 'Update' : 'Add'} Course
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default AdminCourseForm;
