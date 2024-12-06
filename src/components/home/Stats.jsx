import React from 'react';
import { FaUsers, FaGraduationCap, FaBriefcase, FaStar, FaGlobe, FaAward, FaHandshake, FaCertificate } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
    const stats = [
        {
            icon: <FaUsers className="text-5xl" />,
            number: 10000,
            suffix: "+",
            label: "Students Guided",
            description: "Successfully mentored and guided students globally",
        },
        {
            icon: <FaGraduationCap className="text-5xl" />,
            number: 95,
            suffix: "%",
            label: "Success Rate",
            description: "Consistent track record of student achievements",
        },
        {
            icon: <FaBriefcase className="text-5xl" />,
            number: 500,
            suffix: "+",
            label: "Corporate Partners",
            description: "Strong network of industry collaborations",
        },
        {
            icon: <FaStar className="text-5xl" />,
            number: 150,
            suffix: "+",
            label: "Expert Mentors",
            description: "Industry professionals providing guidance",
        },
        {
            icon: <FaGlobe className="text-5xl" />,
            number: 5,
            suffix: "+",
            label: "Countries Reached",
            description: "Global presence and diverse student base",
        },
        {
            icon: <FaAward className="text-5xl" />,
            number: 200,
            suffix: "+",
            label: "Awards Won",
            description: "Recognition for excellence in education",
        },
        {
            icon: <FaHandshake className="text-5xl" />,
            number: 6000,
            suffix: "+",
            label: "Successful Placements",
            description: "Career opportunities secured for students",
        },
        {
            icon: <FaCertificate className="text-5xl" />,
            number: 25,
            suffix: "+",
            label: "Specialized Programs",
            description: "Diverse range of career-focused courses",
        },
    ];

    return (
        <section className='w-full py-20'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>Our Impact in Numbers</h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Transforming careers and building success stories across the globe
                    </p>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                    {stats.map((item, index) => (
                        <StatCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ item }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3, // Start animation when 30% of the component is in view
    });

    return (
        <div
            ref={ref}
            className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300'
        >
            <div className='flex flex-col items-center text-center'>
                <div className='text-violet-600 mb-4 opacity-90 hover:opacity-100 transition-opacity'>
                    {item.icon}
                </div>
                <h3 className='text-4xl font-bold text-gray-800 mb-2 flex items-center'>
                    {inView && (
                        <CountUp start={0} end={item.number} duration={2.5} delay={0.1} />
                    )}
                    <span>{item.suffix}</span>
                </h3>
                <h4 className='text-xl font-semibold text-gray-700 mb-2'>{item.label}</h4>
                <p className='text-gray-600 text-sm'>{item.description}</p>
            </div>
        </div>
    );
};

export default Stats;
