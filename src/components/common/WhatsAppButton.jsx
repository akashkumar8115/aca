import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
    const whatsappNumber = "+919120325950" // Replace with your WhatsApp number
    const message = "Hi! I'm interested in learning more about your courses."

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
            className="fixed bottom-8 left-8 z-50"
        >
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full blur opacity-0.7 group-hover:opacity-100 transition duration-300 hover:opacity-100"></div>
                <button className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-4 rounded-full shadow-lg transition-all duration-300">
                    <FaWhatsapp className="text-2xl" />
                    {/* <span className="hidden md:block text-white opacity-100">Chat with us</span> */}
                </button>
                {/* <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-white rounded-lg shadow-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to chat with our counselor
                </div> */}
            </a>
        </motion.div>
    )
}

export default WhatsAppButton
