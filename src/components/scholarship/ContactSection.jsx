import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className="py-16 px-4 bg-violet-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Need Help?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                    >
                        <FaEnvelope className="text-3xl text-violet-50 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Email Support</h3>
                        <p className="text-black-600">Infoonaca@gmail.com</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                    >
                        <FaPhone className="text-3xl text-violet-50 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                        <p className="text-black-600">+91 9120325950</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                    >
                        <FaWhatsapp className="text-3xl text-violet-50 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
                        <p className="text-black-600">+91 9120325950</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
