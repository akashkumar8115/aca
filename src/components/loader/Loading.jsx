import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100">
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                }}
                className="w-12 h-12 bg-blue-500"
            />
            <h3 className="ml-4 text-xl font-semibold text-gray-700">Loading...</h3>
        </div>
    );
};

export default Loading;
