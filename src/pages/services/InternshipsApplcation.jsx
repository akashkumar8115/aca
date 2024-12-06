import React, { useState } from "react";
import { FaUpload, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUniversity, FaGraduationCap, FaBriefcase, FaLinkedin, FaGithub, FaGlobe, FaCalendar, FaMapMarkerAlt, FaClock, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { FaFilePdf, FaMapPin, FaDollarSign, FaCalendarCheck } from "react-icons/fa";
import { validateInternshipForm } from "../../utils/formValidation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InternshipApplicationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Personal Info 1
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",

        // Education 2
        university: "",
        degree: "",
        major: "",
        graduationYear: "",
        gpa: "",
        relevantCoursework: "",

        // Professional
        linkedIn: "",
        github: "",
        portfolio: "",
        skills: "",
        experience: "",
        projects: "",

        // Internship Preferences
        internshipType: "",
        preferredLocation: "",
        internshipDuration: "",
        availabilityDate: "",
        expectedStipend: "",

        // Documents
        resume: null,
        coverLetter: "",
        certificates: [],

        // Additional
        references: "",
        extraCurricular: "",
        achievements: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (name === "certificates") {
            setFormData(prev => ({
                ...prev,
                [name]: [...prev.certificates, ...files]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        }
    };

    const nextStep = () => {
        const stepErrors = validateInternshipForm(formData, currentStep);
        if (Object.keys(stepErrors).length === 0) {
            setCurrentStep(prev => prev + 1);
        } else {
            setErrors(stepErrors);
            toast.error("Please fill all required fields correctly");
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // API call would go here
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
            toast.success("Application submitted successfully!");
            // Reset form or redirect
        } catch (error) {
            toast.error("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-green-800">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                                icon={<FaUser />}
                                label="Full Name"
                                name="fullName"
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                error={errors.fullName}
                            />
                            <InputField
                                icon={<FaEnvelope />}
                                label="Email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <InputField
                                icon={<FaPhone />}
                                label="Phone"
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                error={errors?.phone}
                            />
                            <InputField
                                icon={<FaCalendarAlt />}
                                label="Date of Birth"
                                name="dateOfBirth"
                                type="date"
                                required
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                error={errors?.dateOfBirth}
                            />
                            <InputField
                                icon={<FaMapMarkerAlt />}
                                label="Address"
                                name="address"
                                type="text"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                error={errors?.address}
                            />

                            {/* Add more personal info fields */}
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-green-800">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                                icon={<FaUniversity />}
                                label="University"
                                name="university"
                                type="text"
                                required
                                value={formData.university}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaGraduationCap />}
                                label="Degree"
                                name="degree"
                                type="text"
                                required
                                value={formData.degree}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaGraduationCap />}
                                label="Major"
                                name="major"
                                type="text"
                                required
                                value={formData.major}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaCalendarAlt />}
                                label="Graduation Year"
                                name="graduationYear"
                                type="number"
                                required
                                value={formData.graduationYear}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaGraduationCap />}
                                label="GPA"
                                name="gpa"
                                type="text"
                                required
                                value={formData.gpa}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaGraduationCap />}
                                label="Relevant Coursework"
                                name="relevantCoursework"
                                type="text"
                                required
                                value={formData.relevantCoursework}
                                onChange={handleChange}
                            />

                            {/* Add more personal info fields */}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-green-800">Professional Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                                icon={<FaLinkedin />}
                                label="LinkedIn Profile"
                                name="linkedIn"
                                type="url"
                                required
                                value={formData.linkedIn}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaGithub />}
                                label="GitHub Profile"
                                name="github"
                                type="url"
                                required
                                value={formData.github}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaLaptopCode />}
                                label="Portfolio"
                                name="portfolio"
                                type="url"
                                value={formData.portfolio}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaBriefcase />}
                                label="Skills"
                                name="skills"
                                type="text"
                                placeholder="e.g., JavaScript, React, Node.js"
                                required
                                value={formData.skills}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaBriefcase />}
                                label="Experience"
                                name="experience"
                                type="text"
                                placeholder="e.g., 2 years at XYZ company"
                                required
                                value={formData.experience}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaProjectDiagram />}
                                label="Projects"
                                name="projects"
                                type="text"
                                placeholder="e.g., Personal portfolio website"
                                required
                                value={formData.projects}
                                onChange={handleChange}
                            />
                            {/* Add more work experience fields */}
                        </div>
                    </div>

                )
            case 4:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-green-800">Internship Preferences</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                                icon={<FaBriefcase />}
                                label="Internship Type"
                                name="internshipType"
                                type="text"
                                placeholder="e.g., Full-time, Part-time"
                                required
                                value={formData.internshipType}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaMapPin />}
                                label="Preferred Location"
                                name="preferredLocation"
                                type="text"
                                placeholder="e.g., San Francisco, Remote"
                                required
                                value={formData.preferredLocation}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaCalendarCheck />}
                                label="Internship Duration"
                                name="internshipDuration"
                                type="text"
                                placeholder="e.g., 3 months, 6 months"
                                required
                                value={formData.internshipDuration}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaCalendarCheck />}
                                label="Availability Date"
                                name="availabilityDate"
                                type="date"
                                required
                                value={formData.availabilityDate}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={<FaDollarSign />}
                                label="Expected Stipend"
                                name="expectedStipend"
                                type="text"
                                placeholder="e.g., $500/month, Negotiable"
                                required
                                value={formData.expectedStipend}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-green-800">Documents</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* <FileInputField icon={<FaFileAlt />} label="Resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                            <FileInputField icon={<FaFileAlt />} label="Cover Letter" name="coverLetter" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                            <FileInputField icon={<FaCertificate />} label="Certificates" name="certificates" accept=".pdf,.jpg,.png" multiple onChange={handleFileChange} /> */}
                        </div>
                    </div>
                );






            // Add cases for other steps
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Progress Bar */}
                    <div className="bg-gradient-to-r from-green-400 to-green-600 p-6">
                        <div className="flex justify-between text-white">
                            {[1, 2, 3, 4].map(step => (
                                <div
                                    key={step}
                                    className={`flex items-center ${currentStep >= step ? 'text-white' : 'text-green-200'}`}
                                >
                                    <span className={`h-8 w-8 rounded-full flex items-center justify-center border-2 
                                        ${currentStep >= step ? 'border-white bg-green-500' : 'bg-white text-green-500 border-green-100'}`}
                                    >
                                        {step}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8">
                        {renderStep()}

                        <div className="mt-8 flex justify-between">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-green-200 text-white-700 px-6 py-2 rounded-lg hover:bg-red-300"
                                >
                                    Previous
                                </button>
                            )}
                            {currentStep < 4 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Application"}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

const InputField = ({ icon, label, name, type, required, value, onChange, error }) => (
    <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-rad-500">*</span>}
        </label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                {icon}
            </div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500
                    ${error ? 'border-red-500' : 'border-gray-300'}`}
            />
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
);

export default InternshipApplicationForm;