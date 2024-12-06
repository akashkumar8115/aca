import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
        id: 1,
        name: "Rahul Kumar",
        course: "B.Tech Computer Science",
        rating: 5,
        review: "Excellent course structure and placement opportunities.",
        date: "2023-12-15"
    },
    {
        id: 2,
        name: "Priya Singh",
        course: "BBA",
        rating: 4,
        review: "Great practical exposure and industry connections.",
        date: "2023-12-10"
    }
];

const CourseReviews = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-6 mt-8"
        >
            <h3 className="text-xl font-semibold mb-6">Student Reviews</h3>
            <div className="space-y-6">
                {reviews.map((review) => (
                    <motion.div
                        key={review.id}
                        whileHover={{ scale: 1.01 }}
                        className="border-b pb-4"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-medium">{review.name}</h4>
                                <p className="text-sm text-gray-600">{review.course}</p>
                            </div>
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={index < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="mt-2 text-gray-700">{review.review}</p>
                        <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default CourseReviews;
