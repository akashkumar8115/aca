import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaBook, FaFileAlt, FaAddressCard } from 'react-icons/fa';
// import "../../styles/scholarship.css";
const ScholarshipForm = () => {
    const [step, setStep] = useState(1);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        if (!formData) {
            // Handle form submission for step 4
            console.log('Form submitted:', formData,'Not Accepted');
        }
       // Reset form data for the next step
        // console.log(formData);
        document.write('Form is Not Working Please Try Again Later');
        console.log('Form submitted:', formData);
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
                    <h2 className="text-3xl font-bold text-center mb-8">Scholarship Application</h2>

                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            {[1, 2, 3, 4].map((stepNumber) => (
                                <motion.div
                                    key={stepNumber}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-violet-50 text-white' : 'bg-gray-200'
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stepNumber}
                                </motion.div>
                            ))}
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                            <motion.div
                                className="h-full bg-violet-50 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: `${(step / 4) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Form Steps */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {renderStep()}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="px-6 py-2 bg-green-200 text-black border-black-300 rounded-lg hover:bg-green-300 hover:text-black transition-colors duration-200"
                                >
                                    Previous
                                </button>

                            )}
                            {step < 4 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="px-6 py-2 bg-violet-50 text-white rounded-lg hover:bg-violet-600"

                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                >
                                    Submit Application
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
