import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient = () => (
    <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-purple-50 opacity-70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </div>
);

export const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-20 h-20 rounded-full bg-blue-200 opacity-10"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: i * 2,
                }}
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
            />
        ))}
    </div>
);
