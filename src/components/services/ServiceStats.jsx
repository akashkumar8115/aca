import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    {
        number: 10000,
        suffix: "+",
        label: "Students Counseled",
        icon: "👥",
    },
    {
        number: 50,
        suffix: "+",
        label: "Partner Companies",
        icon: "🏢",
    },
    {
        number: 95,
        suffix: "%",
        label: "Success Rate",
        icon: "📈",
    },
    {
        number: 200,
        suffix: "+",
        label: "Expert Counselors",
        icon: "👨‍🏫",
    },
];

const ServiceStats = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-violet-500 to-violet-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ stat, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3,    // Start animation when 30% of the component is in view
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
        >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-white mb-2">
                {inView && (
                    <CountUp start={0} end={stat.number} duration={2.5} suffix={stat.suffix} />
                )}
            </div>
            <div className="text-white opacity-90">{stat.label}</div>
        </motion.div>
    );
};

export default ServiceStats;
