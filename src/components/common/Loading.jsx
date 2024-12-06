import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
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
                className="loading-animation"
            />
            <h3 className="loading-text">Loading...</h3>
        </div>
    );
};

export default Loading;
