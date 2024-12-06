import React, { useState } from "react";

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({ ...prevData, resume: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log("Form submitted", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 pt-32">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 space-y-6"
            >
                <h2 className="text-2xl font-bold text-gray-700 text-center">
                    Job Application
                </h2>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                        Upload Resume (PDF)
                    </label>
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                        Cover Letter
                    </label>
                    <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Introduce yourself and state why you're interested in this position."
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                        Additional Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Any additional information you'd like to share"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-semibold p-2 rounded-lg hover:bg-green-600 focus:outline-none"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JobApplicationForm;
