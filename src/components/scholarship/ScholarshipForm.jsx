import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaBook, FaFileAlt, FaAddressCard } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
// import "../../styles/scholarship.css";
const ScholarshipForm = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        // Personal Information
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        category: '',
        address: '',
        city: '',
        state: '',
        pincode: '',

        // Academic Information
        currentLevel: '',
        institution: '',
        board: '',
        previousMarks: '',
        currentCGPA: '',
        stream: '',
        achievements: '',

        // Documents
        photo: null,
        academicRecords: null,
        incomeProof: null,
        recommendationLetter: null,

        // Additional Information
        extracurricular: '',
        whyDeserving: '',
        futureGoals: '',
        familyIncome: '',
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleNext = () => {
        setStep(step + 1);
    };
    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!validateForm()) {
        //     toast.error("Please fill in all required fields correctly.");
        //     return;
        // }

        setLoading(true);

        console.log("Form Data:", formData);
        try {
            
            // Prepare formData for submission
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                if (formData[key] instanceof File || formData[key] instanceof Blob) {
                    formDataToSend.append(key, formData[key]);
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            });

            // Post request to the API
            const response = await axios.post(
                'http://localhost:5000/api/scholarships',
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        // 'Authorization': `Bearer ${localStorage.getItem('token')}`, // Optional: Include a token if authentication is required
                    },
                }
            );
            response()
            // Success response
            toast.success("Scholarship application submitted successfully!");

            // Reset form data safely
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                dob: '',
                gender: '',
                category: '',
                address: '',
                city: '',
                state: '',
                pincode: '',
                currentLevel: '',
                institution: '',
                board: '',
                previousMarks: '',
                currentCG: '',
                stream: '',
                achievements: '',
                photo: null,
                academicRecords: null,
                incomeProof: null,
                recommendationLetter: null,
                extracurricular: '',
                whyDeserving: '',
                futureGoals: '',
                familyIncome: '',
                step: 1,
            });
            setStep(1);

        } catch (error) {
            // Handle errors
            toast.error(error.response?.data?.message || "Error submitting the application.");
            console.error("Error during submission:", error);
        } finally {
            setLoading(false);
        }
    };


    const validateForm = () => {
        // Define required fields
        const requiredFields = [
            'firstName', 'lastName', 'email', 'phone', 'currentLevel',
            'institution', 'board', 'previousMarks', 'currentCG', 'stream',
            'photo', 'academicRecords', 'incomeProof', 'extracurricular',
            'whyDeserving', 'futureGoals', 'familyIncome',
        ];

        // Validate each field
        for (const field of requiredFields) {
            if (!formData[field] || formData[field].toString().trim() === '') {
                // Show a user-friendly field name in the error message
                const fieldLabel = field
                    .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
                    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
                toast.error(`${fieldLabel} is required.`);
                return false;
            }
        }

        // Validate email format
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            return false;
        }

        // Validate phone number (basic validation for 10 digits)
        if (!/^\d{10}$/.test(formData.phone)) {
            toast.error('Please enter a valid 10-digit phone number.');
            return false;
        }

        // Additional numeric validations (e.g., previous marks and CG)
        if (isNaN(formData.previousMarks) || formData.previousMarks < 0 || formData.previousMarks > 100) {
            toast.error('Previous marks must be a valid percentage between 0 and 100.');
            return false;
        }
        if (isNaN(formData.currentCG) || formData.currentCG < 0 || formData.currentCG > 10) {
            toast.error('Current CG must be a valid GPA between 0 and 10.');
            return false;
        }

        // Ensure file fields are valid
        const fileFields = ['photo', 'academicRecords', 'incomeProof'];
        for (const field of fileFields) {
            if (!(formData[field] instanceof File)) {
                toast.error(`${field.charAt(0).toUpperCase() + field.slice(1)} must be a valid file.`);
                return false;
            }
        }

        return true; // Form is valid
    };


    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold flex items-center">
                            <FaUserGraduate className="mr-2" /> Personal Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            />
                            <input
                                type="date"
                                name="dob"
                                placeholder="Date of Birth"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            />
                            <select
                                name="gender"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <select
                                name="category"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            >
                                <option value="">Select Category</option>
                                <option value="general">General</option>
                                <option value="obc">OBC</option>
                                <option value="sc">SC</option>
                                <option value="st">ST</option>
                            </select>
                        </div>
                        <textarea
                            name="address"
                            placeholder="Full Address"
                            className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                            rows="3" cols="25"
                            onChange={handleInputChange}
                        />
                    </motion.div>
                );

            case 2:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold flex items-center">
                            <FaBook className="mr-2" /> Academic Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <select
                                name="currentLevel"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            >
                                <option value="">Select Current Level</option>
                                <option value="class10">Class 10</option>
                                <option value="class11">Class 11</option>
                                <option value="class12">Class 12</option>
                                <option value="undergraduate">Undergraduate</option>
                                <option value="postgraduate">Postgraduate</option>
                            </select>
                            <input
                                type="text"
                                name="institution"
                                placeholder="Current Institution"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            />
                            <select
                                name="stream"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            >
                                <option value="">Select Stream</option>
                                <option value="science">Science</option>
                                <option value="commerce">Commerce</option>
                                <option value="arts">Arts</option>
                                <option value="engineering">Engineering</option>
                                <option value="medical">Medical</option>
                            </select>
                            <input
                                type="number"
                                name="previousMarks"
                                placeholder="Previous Year Percentage"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            />
                        </div>
                        <textarea
                            name="achievements"
                            placeholder="Academic Achievements (competitions, olympiads, etc.)"
                            className="input-field border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none p-2"
                            rows="3" cols="25"
                            onChange={handleInputChange}
                        />
                    </motion.div>
                );

            case 3:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold flex items-center">
                            <FaFileAlt className="mr-2" /> Documents Upload
                        </h3>
                        <div className="space-y-4">
                            <div className="file-upload">
                                <label>Profile Photo</label>
                                <input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    onChange={handleInputChange}
                                    className='file-input file-input-bordered w-full max-w-xs p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none'
                                />
                            </div>
                            <div className="file-upload">
                                <label>Academic Records</label>
                                <input
                                    type="file"
                                    name="academicRecords"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleInputChange}
                                    className='file-input file-input-bordered w-full max-w-xs p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none'

                                />
                            </div>
                            <div className="file-upload">
                                <label>Income Proof</label>
                                <input
                                    type="file"
                                    name="incomeProof"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleInputChange}
                                    className='file-input file-input-bordered w-full max-w-xs p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none'

                                />
                            </div>
                        </div>
                    </motion.div>
                );

            case 4:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold flex items-center">
                            <FaAddressCard className="mr-2" /> Additional Information
                        </h3>
                        <div className="space-y-4">
                            <textarea
                                name="extracurricular"
                                placeholder="Extracurricular Activities"
                                className="input-field p-2 border border-gray-300 rounded-md mr-4 hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                rows="3"
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="whyDeserving"
                                placeholder="Why do you deserve this scholarship?"
                                className="input-field p-2 border border-gray-300 rounded-md mr-4 hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                rows="3"
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="futureGoals"
                                placeholder="Your future goals and aspirations"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                rows="3"
                                onChange={handleInputChange}
                            />
                            <select
                                name="familyIncome"
                                className="input-field p-2 border border-gray-300 rounded-md hover:border-green-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleInputChange}
                            >
                                <option value="">Annual Family Income</option>
                                <option value="below2">Below 2 Lakhs</option>
                                <option value="2-5">2-5 Lakhs</option>
                                <option value="5-8">5-8 Lakhs</option>
                                <option value="above8">Above 8 Lakhs</option>
                            </select>
                        </div>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Scholarship Application
                    </h2>

                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            {[1, 2, 3, 4].map((stepNumber) => (
                                <motion.div
                                    key={stepNumber}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold ${step >= stepNumber
                                            ? 'bg-violet-500 text-white'
                                            : 'bg-gray-300 text-gray-700'
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stepNumber}
                                </motion.div>
                            ))}
                        </div>
                        <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-violet-500 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: `${(step / 4) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                    {/* Form Steps */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {renderStep()}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-8">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-300 hover:text-gray-900 transition-colors duration-200"
                                    disabled={loading}
                                >
                                    Previous
                                </button>
                            )}

                            {step < 4 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="px-6 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-all"
                                    disabled={loading}
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className={`px-6 py-2 rounded-lg transition-all ${loading
                                            ? 'bg-green-400 cursor-not-allowed'
                                            : 'bg-green-500 hover:bg-green-600 text-white'
                                        }`}
                                    disabled={loading}
                                >
                                    {loading ? 'Submitting...' : 'Submit Application'}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default ScholarshipForm;
