import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Priya Singh",
            role: "Software Engineer at Google",
            image: "/images/testimonials/priya.jpg",
            quote: "The career guidance program helped me transition from a fresher to a role at Google. The mentorship was invaluable.",
            rating: 5
        },
        {
            name: "Rahul Sharma",
            role: "Data Scientist at Amazon",
            image: "/images/testimonials/rahul.jpg",
            quote: "The structured approach to career planning and skill development made all the difference in my career journey.",
            rating: 5
        },
        {
            name: "Neha Patel",
            role: "Product Manager at Microsoft",
            image: "/images/testimonials/neha.jpg",
            quote: "From assessment to placement, every step was well-planned and executed. Highly recommend this program!",
            rating: 5
        }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto">
                <motion.div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
                    <p className="text-gray-600">Hear from our program graduates who transformed their careers</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-6 relative"
                        >
                            <FaQuoteLeft className="text-blue-100 text-4xl absolute top-4 left-4" />
                            <div className="text-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4"
                                />
                                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                <p className="text-blue-600 text-sm">{testimonial.role}</p>
                            </div>
                            <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                            <div className="flex justify-center text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
