import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import '../styles/InternshipsDetail.css';
import ApiData from "../data/api.json";

const InternshipsDetail = () => {
    const { id } = useParams();
    const [internship, setInternship] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchInternship = async () => {
            try {
                setIsLoading(true);
                const selectedInternship = ApiData.internships.find(
                    internship => internship.id === parseInt(id)
                );
                setInternship(selectedInternship);
            } catch (error) {
                console.error('Error fetching internship:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInternship();
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen pt-32">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (!internship) {
        return (
            <div className="text-center py-20 pt-32">
                <h2 className="text-2xl font-bold">Internship not found</h2>
                <Link to="/services/internships" className="mt-3 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Back to Listings
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-16 px-4 md:px-6 pt-32">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold break-words">{internship.title}</h1>
                    <h3 className="text-xl text-gray-600 mb-6">{internship.company}</h3>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="font-bold mb-1">Location</p>
                            <p className="break-words">{internship.location}</p>
                        </div>
                        <div>
                            <p className="font-bold mb-1">Duration</p>
                            <p className="break-words">{internship.duration}</p>
                        </div>
                        <div>
                            <p className="font-bold mb-1">Stipend</p>
                            <p className="break-words">{internship.stipend}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="text-xl font-bold mb-3">Description</h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="break-words">{internship.description}</p>
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="text-xl font-bold mb-3">Requirements</h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <ul className="list-none">
                            {internship.requirements.map((requirement, index) => (
                                <li key={index} className="mb-2 break-words">
                                    • {requirement}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/services/internships-application"
                        className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-center"
                    >
                        Apply Now
                    </Link>
                    <Link
                        to="/services/internships"
                        className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-center"
                    >
                        Back to Listings
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InternshipsDetail;